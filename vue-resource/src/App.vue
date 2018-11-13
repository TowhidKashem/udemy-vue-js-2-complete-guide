<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <input type="text" placeholder="Username" v-model="user.name"><br>
                <input type="text" placeholder="Email" v-model="user.email"><br>
                <button @click.prevent="submit">Submit</button>
                <hr>
                <button @click.prevent="fetchData">Fetch Data</button>
                <ul>
                    <li v-for="user in users">{{ user.name }} - {{ user.email }}</li>
                </ul>
                <hr>
                <input type="text" v-model="endpoint">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: ''
                },
                users: [],
                resource: {},
                endpoint: 'data'         
            }
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                //     .then(response => {
                //         console.log(response);
                //     }, err => {
                //         console.log(err);
                //     });

                // this.resource.save({}, this.user);

                this.resource.saveAlt(this.user);
            },
            fetchData() {
                // this.$http.get('data.json')
                //     .then(response => response.json())
                //     .then(response => {
                //         const resultArray = [];
                //         for (let key in response) {
                //             resultArray.push(response[key]);
                //         }
                //         this.users = resultArray;
                //     });

                this.resource
                    .getData({ endpoint: this.endpoint })
                    .then(response => response.json())
                    .then(response => {
                        const resultArray = [];
                        for (let key in response) {
                            resultArray.push(response[key]);
                        }
                        this.users = resultArray;
                    });
            }
        },
        created() {
            const customActions = {
                saveAlt: {
                    method: 'POST',
                    url: 'alternative.json'
                },
                getData: {
                    method: 'GET'
                }
            }

            // this.resource = this.$resource('data.json');
            this.resource = this.$resource('{endpoint}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
