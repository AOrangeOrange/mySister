<template>
    <!-- <datepicker language="zh" :format="customFormatter">
    
        </datepicker> -->
    
    <div class="container">
    
        <div class="row">
    
            <div class="col-md-12">
    
                <date-picker v-model="date" :config="config"></date-picker>
    
            </div>
    
        </div>
    
    </div>
</template>
<script>
    // import Datepicker from 'vuejs-datepicker';
    
    // Import required dependencies 
    
    import 'bootstrap/dist/css/bootstrap.css';
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
    import moment from 'moment';
    export default {
        name: 'timepicker',
        components: {
            datePicker
        },
        data() {
            return {
                date: new Date(),
                config: {
                format: 'YYYY-MM-DD',
                useCurrent: false,
                dayViewHeaderFormat:'YYYY-MM',
                // locale:moment.local('zh-cn')
                // calendarWeeks:true
                // en:'zh',
                }    
            }
    
        },
    
        methods: {
            customFormatter(date) {
                return moment(date).format('YYYY-MM-DD');
            }
        }
    
    
    
    }
</script>
<style>
    
</style>