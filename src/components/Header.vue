<template>
    <header id="header" class="header">
        <div class="top-left">
            <div class="navbar-header">
                <a class="navbar-brand" href="./"><h2>LOGO</h2></a>
                <a class="navbar-brand hidden" href="./"><h2>LOGO</h2></a>
                <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
            </div>
        </div>
        <div class="top-right">
            <div class="header-menu">
                <div class="header-left">


                    <div class="user-area dropdown float-right">
                        <a class="nav-link" href="#"><i class="fa fa-close"></i>Logout</a>

                    </div>

                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>