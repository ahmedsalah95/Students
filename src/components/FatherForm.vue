<template>
    <div class="student-form">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-2 col-lg-2">

                <div class="form-choice">
                    <p class="text-center"><router-link to="/Students">Student</router-link></p>
                </div>


            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 col-lg-2">
                <div class="form-choice">
                    <p class="text-center"><router-link to="/Fathers">Father</router-link></p>
                </div>

            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 col-lg-2">
                <div class="form-choice">
                    <p class="text-center">Mother</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 col-lg-2">
                <div class="form-choice">
                    <p class="text-center">Siblings</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 col-lg-2">
                <div class="form-choice">
                    <p class="text-center">Materials</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 col-lg-2">
                <div class="form-choice">
                    <p class="text-center">Emergency</p>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="student-avatar">
                <img src="https://via.placeholder.com/100" alt="">
            </div>

            <div class="student-info">
                <p>Karim Ahmed Mostafa Kamel</p>
                <p>123456789</p>
                <span>IB - </span><span>PYP</span><span> - PYP2A</span>
            </div>

        </div>
        <br>
        <div class="row">


            <!--form -->

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Name EN</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="text" placeholder="First">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="Middle">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="Last">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <span></span>
                        <input class="form-control" type="text" placeholder="Family">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Name AR</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="text" placeholder="الاول">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="الوسط">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="الاخير">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <span></span>
                        <input class="form-control" type="text" placeholder="اسم العائلة">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Birth date</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="date">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Nationality</p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="Egyptian">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Gender</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="text" placeholder="male">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Religion</p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="Muslim">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Father National ID</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="text" placeholder="12345">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Father Mobile</p>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected value="011">011</option>
                                    <option value="012">012</option>
                                    <option value="010">010</option>
                                    <option value="015">015</option>
                                </select>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                <input class="form-control" type="text" placeholder="1169321">
                            </div>
                        </div>


                    </div>
                    <div class=" col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Student Email</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="email" placeholder="example@example.com">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Religion</p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="Muslim">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Address details</p>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                        <input type="text" class="form-control"
                               placeholder="please enter student's address">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>


                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Country</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="text" placeholder="Country">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">City Name</p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="City name">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">District Name</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="text" placeholder="District...">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Street</p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="text" placeholder="Street no...">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>


                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Academic Details</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected value="school3">School Branch</option>
                            <option value="school1">school 1</option>
                            <option value="school2">school 2</option>
                            <option value="school3">school 3</option>
                        </select>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <select class="custom-select" id="inputGroupSelect03">
                            <option selected value="Division">Division</option>
                            <option value="Division">Division 1</option>
                            <option value="Division">Division 2</option>
                            <option value="Division">Division 3</option>
                        </select>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <select class="custom-select" id="inputGroupSelect04">
                            <option selected value="Grade">Grade</option>
                            <option value="Grade">Grade 1</option>
                            <option value="Grade">Grade 2</option>
                            <option value="Grade">Grade 3</option>
                        </select>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Access email</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input class="form-control" type="email" placeholder="name@domain.com">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Access Password</p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <input class="form-control" type="password" value="123456" >
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <a href="#">change</a>
                    </div>
                </div>


                <br>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right">Documents</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input type="file">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right"><a href="#">Change</a></p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input type="file">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right"><a href="#">Change</a></p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <input type="file">
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">
                        <p class="float-right"><a href="#">Change</a></p>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-6 col-lg-2">

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <a href="#">upload new Document</a>
                    </div>
                </div>
                <br>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <button class="btn btn-outline-success float-right">Save</button>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">

                        <button class="btn btn-outline-success" >Submit & Close</button>
                    </div>
                </div>

            </div>

            <!--end of form-->

        </div>


    </div>
</template>

<script>
    export default {
        name: "FatherForm"
    }
</script>

<style scoped>
    .form-choice a{
        color: White!important;
    }
</style>