<template>
    <!-- Content Wrapper. Contains page content -->
    <div>
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          Create User
          <small>All users</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Forms</a></li>
          <li class="active">General Elements</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <!-- right column -->
          <div class="col-md-12">
            <!-- Horizontal Form -->
            <div class="box box-info">
              <div class="box-header with-border">
                <h3 class="box-title">Horizontal Form</h3>
              </div>
              <!-- /.box-header -->
              <!-- form start -->
              <form @submit.prevent = "submit" class="form-horizontal col-md-offset-1">
                <div class="box-body">
                  <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Name</label>

                    <div class="col-sm-7">
                      <input type="text" class="form-control" id="name" placeholder="Name" v-model= "user.name">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>

                    <div class="col-sm-7">
                      <input type="email" class="form-control" id="email" placeholder="Email" v-model = "user.email">
                    </div>
                  </div>
                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                  <router-link to = "/user" class="btn btn-danger col-md-offset-4">Cancel</router-link>
                  <button type="submit" class="btn btn-info" style="margin-left: 1em">Update</button>
                </div>
                <!-- /.box-footer -->
              </form>
            </div>
            <!-- /.box -->
          </div>
          <!--/.col -->
        </div>
        <!-- /.row -->
      </section>
      <!-- /.content -->
    </div>
</template>

<script>
    export default{
        data () {
            return {
                user: {
                    name : "",
                    email: ""
                }
            }
        },
        created () {
            this.$http.get('http://localhost:8000/api/user/'+ this.$route.params.id)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.user.name = data.name;
                this.user.email = data.email;
            })
        },
        methods : {
            submit() {
                this.$http.put('http://localhost:8000/api/user/'+ this.$route.params.id, this.user)
                .then(() => {
                    this.$router.push('/user');
                }, error =>{
                    console.log(error);
                });
            }
        }
    }
</script>