# 提瓦特历史时间线

这是一个基于Markdown的协作项目，用于整理和维护原神（Genshin Impact）的世界观历史资料。

## 项目特点

- 📝 **Markdown编辑** - 使用简单的Markdown语法编辑内容
- 🤝 **协作友好** - 通过GitHub进行版本控制和协作
- 🚀 **自动部署** - 推送到main分支自动构建并部署到Cloudflare Pages
- 📱 **响应式设计** - 适配桌面和移动设备

## 如何贡献

### 对于非技术用户

1. 在GitHub上找到要编辑的Markdown文件（在`content/`目录下）
2. 点击编辑按钮（铅笔图标）
3. 使用GitHub的在线编辑器修改内容
4. 提交Pull Request等待审核

### 对于技术用户

1. Fork这个仓库
2. 克隆到本地：`git clone [your-fork-url]`
3. 安装依赖：`npm install`
4. 编辑`content/`目录下的Markdown文件
5. 本地预览：`npm run dev`
6. 提交并推送，然后创建Pull Request

## 项目结构

```
├── content/           # Markdown内容文件
│   ├── timeline.md    # 历史时间线
│   ├── characters.md  # 重要人物
│   └── events.md      # 重大事件
├── templates/         # HTML模板
├── scripts/           # 构建脚本
└── .github/workflows/ # 自动部署配置
```

## 本地开发

```bash
# 安装依赖
npm install

# 构建网站
npm run build

# 开发服务器（构建并启动本地服务器）
npm run dev
```

## Markdown语法参考

### 基本语法
- `# 标题` - 一级标题
- `## 副标题` - 二级标题
- `**粗体**` - 粗体文字
- `*斜体*` - 斜体文字
- `[链接文字](URL)` - 链接

### 列表
- 无序列表使用 `-` 或 `*`
- 有序列表使用数字 `1.`

### 代码块
```
使用三个反引号包围代码块
```

## 贡献指南

1. 保持内容的准确性，最好提供游戏内的原始资料来源
2. 使用清晰的标题结构
3. 对于有争议的内容，请在Pull Request中说明
4. 遵循现有的格式和风格

## 技术栈

- **构建工具**: Node.js + 自定义构建脚本
- **模板引擎**: 简单的字符串替换
- **Markdown解析**: marked
- **样式**: Tailwind CSS
- **部署**: GitHub Actions + Cloudflare Pages

## 许可证

本项目采用MIT许可证，内容基于原神游戏资料整理。