# Vue3中使用TS

确保script标签中声明lang为ts,如果使用了JSF语法，声明为TSX
``` js
<script lang="ts"></script>
<script lang="tsx"></script>
```
## setup script语法
`<script setup lang="ts"></script>`  
props数据：用definePropsAPI
``` js
<script setup lang="ts">
    defineProps <{msg: string}>()

    defineProps ({
        msg:{
            type:string,
            default:''
        }
    })
</script>
```