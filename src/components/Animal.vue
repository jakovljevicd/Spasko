<template>
    <div id='animal' class = row shadow>
        <br/>
        <h2>{{ animal.name }}</h2>
        
        <br>
        <b>desc: {{animal.desc}}</b>
        <br>
        <b>age: {{animal.age}}</b>
        <br>
        <b>weight: {{animal.weight}}</b>
    </div>
</template>


<script>
    export default{
        name: 'Animal',
        props: [
            'animal'
        ]
    }
</script>