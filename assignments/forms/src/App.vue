<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <form v-if="!submitted">
                        Full Name:
                        <input type="text" v-model="fullName">
                        <br>
                        Custom Full Name:
                        <input type="text" 
                            :value="customFullName"
                            @change="updateCustomFullName">
                        <br>                        
                        Email:
                        <input type="email" v-model="email">
                        <br>
                        Password:
                        <input type="password" v-model="password">
                        <br>
                        Store Data?:
                        <label>Yes <input type="radio" value="yes" v-model="storeData"></label>
                        <br>
                        <label>No <input type="radio" value="no" v-model="storeData"></label>
                        <br><br>
                        <button @click.prevent="submitted = true">Submit</button>
                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default" v-if="!submitted">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Custom Full Name: {{ customFullName }}</p>                        
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                submitted: false,
                fullName: '',
                email: '',
                password: '',
                storeData: 'yes'
            }
        },
        methods: {
            updateCustomFullName(e) {
                this.customFullName = e.target.value;
            }
        }
    }
</script>

<style>
</style>
