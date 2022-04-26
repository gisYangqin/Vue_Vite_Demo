# ESlint基础配置
用于代码规范
1. 安装
npm install eslint --save-dev
2. 初始化项目的eslint的项目配置
npx eslint --init
    ```
    √ How would you like to use ESLint? · style
    √ What type of modules does your project use? · esm
    √ Which framework does your project use? · vue
    √ Does your project use TypeScript? · No / Yes
    √ Where does your code run? · browser
    √ How would you like to define a style for your project? · guide
    √ Which style guide do you want to follow? · standard
    √ What format do you want your config file to be in? · JavaScript
    ```
3. 在package.json文件Script结构中添加命令.该命令执行验证语法，fix：简单的不符合代码规范的直接修改  
    `"lint":"eslint ./src/**/*.{js,jsx,vue,ts,tsx} --fix"`
