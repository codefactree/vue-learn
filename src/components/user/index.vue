<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Dashboard
                <small>Version 2.0</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li class="active">Dashboard</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <!-- TABLE: LATEST ORDERS -->
            <div class="box box-info">
              <div class="box-header with-border">
                <h3 class="box-title">All Users</h3>

                <div class="box-tools pull-right">
                  <a class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                  </a>
                  <router-link to = "/user/create" class="btn btn-box-tool"><i class="fa fa-user-plus"></i></router-link>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
            <div class="table-responsive">
              <table class="table no-margin">
                <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Company Name</th>
                      <th>Person Name</th>
                      <th>Phone No</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for = "(user, key) in users" :key = "user.email">
                    <td><a href="pages/examples/invoice.html">{{ key }} </a></td>
                    <td> {{ user.name }} </td>
                    <td> {{ user.email }} </td>
                    <td><span class="label label-success">Shipped</span></td>
                    <td>
                        <router-link :to="'/user/'+ user.id + '/edit'" class="btn btn-box-tool"><i class="fa fa-edit"></i></router-link>
                        <form @submit.prevent = "deleteUser(user.id)">
                            <button type="submit" class="btn btn-box-tool"><i class="fa fa-trash"></i> </button>
                        </form>
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
            <!-- /.table-responsive -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
            <router-link to = "/user/create"  class="btn btn-sm btn-info btn-flat pull-left">Create new User</router-link>
 <!--            <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a> -->
            </div>
            <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </section>
    </div>
</template>

<script>
    export default{
        data () {
            return {
              users: []
          }
      },
      mounted(){
        this.$http.get('http://localhost:8000/api/user')
        .then( response => {
          return response.json();
        })
        .then( data => {
            this.users = data;
        });
    },
    methods : {
        deleteUser(id){
            this.$http.delete('http://localhost:8000/api/user/'+id)
            .then(() => {
                this.$router.go();
            })

        }
    }
}

</script>
