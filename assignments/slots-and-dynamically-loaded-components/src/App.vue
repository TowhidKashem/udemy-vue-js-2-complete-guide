<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="curComponent = 'blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="curComponent = 'green'">Load Green Template</button>
                <button class="btn btn-danger" @click="curComponent = 'red'">Load Red Template</button>
                <hr>

                <component :is="loadedComponent">Dynamic Component</component>

                <br>
                <br>
                <br>                                
                <hr>

                <app-blue>Blue here</app-blue>
                <app-green>
                    <h1 slot="title">Hello World</h1>
                    <p slot="body">Something body</p>
                    <slot>The rest</slot>
                </app-green>
                <app-red>Red here</app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function() {
            return {
                curComponent: null,
                loadedComponent: Blue
            }
        },
        watch: {
            curComponent: function() {
                if (this.curComponent === 'blue')
                    this.loadedComponent = Blue;
                else if (this.curComponent === 'green')
                    this.loadedComponent = Green;                
                else if (this.curComponent === 'red')                
                    this.loadedComponent = Red;
            }
        }
    }
</script>

<style>
</style>
