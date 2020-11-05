<template>
    <body>
    <!-- Left Panel -->
     <LeftPanel/>
    <!-- /#left-panel -->
    <!-- Right Panel -->
    <div id="right-panel" class="right-panel">
        <!-- Header-->
        <Header/>
        <!-- /#header -->
        <!-- Content -->
        <div class="content">
            <!-- Animated -->
            <div class="animated fadeIn">
                <!-- Widgets  -->
                 <Widgets/>
                <!-- /Widgets -->

                <div class="clearfix"></div>

                <div class="orders">
                    <StudentList/>
                </div>

            </div>

        </div>
        <!-- /.content -->
        <div class="clearfix"></div>
        <!-- Footer -->
        <footer class="site-footer">

        </footer>
        <!-- /.site-footer -->
    </div>
    <!-- /#right-panel -->

    </body>
</template>

<script>
    import StudentList from "./StudentList";
    import LeftPanel from "./LeftPanel";
    import Header from "./Header";
    import Widgets from "./Widgets";

    export default {
        name: 'MainLayout',
        components: {Widgets, Header, LeftPanel, StudentList},
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    input {
        margin-left: 10px;
    }
</style>
