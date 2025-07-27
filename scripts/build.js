const fs = require('fs-extra');
const path = require('path');
const { marked } = require('marked');

async function buildSite() {
    console.log('开始构建网站...');

    // 确保输出目录存在
    await fs.ensureDir('dist');

    // 读取模板
    const templatePath = path.join(__dirname, '../templates/index.html');
    let template = await fs.readFile(templatePath, 'utf8');

    // 读取内容文件
    const contentDir = path.join(__dirname, '../content');
    const timelineContent = await readMarkdownFile(path.join(contentDir, 'timeline.md'));
    const charactersContent = await readMarkdownFile(path.join(contentDir, 'characters.md'));
    const eventsContent = await readMarkdownFile(path.join(contentDir, 'events.md'));

    // 替换模板中的占位符
    template = template.replace('{{TIMELINE_CONTENT}}', timelineContent);
    template = template.replace('{{CHARACTERS_CONTENT}}', charactersContent);
    template = template.replace('{{EVENTS_CONTENT}}', eventsContent);

    // 写入最终的HTML文件
    await fs.writeFile('dist/index.html', template);

    // 复制其他静态资源
    if (await fs.pathExists('assets')) {
        await fs.copy('assets', 'dist/assets');
    }

    console.log('网站构建完成！');
}

async function readMarkdownFile(filePath) {
    try {
        if (await fs.pathExists(filePath)) {
            const content = await fs.readFile(filePath, 'utf8');
            // 如果内容已经包含HTML标签，直接返回，否则使用Markdown解析
            if (content.includes('<section') || content.includes('<div')) {
                return content;
            }
            return marked(content);
        }
        return '';
    } catch (error) {
        console.warn(`无法读取文件 ${filePath}:`, error.message);
        return '';
    }
}

buildSite().catch(console.error);