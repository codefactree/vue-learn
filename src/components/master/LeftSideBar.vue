<template>
     <aside class="main-sidebar" style="height: 200%">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar" >
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="AdminLte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>Alexander Pierce</p>
            <a href="#"><i class="fa fa-gear text-success"></i> My Profile</a>
          </div>
        </div>
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="Search...">
            <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">MAIN NAVIGATION</li>
          <li class="active treeview">
            <router-link to="/">
              <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            </router-link>
          </li>
         
          <!-- <li>
            <a href="pages/widgets.html">
              <i class="fa fa-th"></i> <span>Widgets</span>
              <span class="pull-right-container">
                <small class="label pull-right bg-green">new</small>
              </span>
            </a>
          </li> -->
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i>
              <span>Users</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="user"><i class="fa fa-circle-o"></i> All Users</router-link></li>
              <li><router-link to="user"><i class="fa fa-circle-o"></i> Sellers </router-link></li>
              <li><router-link to="user"><i class="fa fa-circle-o"></i> Buyers</router-link></li>
              <li><router-link to="user">
                <i class="fa fa-circle-o"></i> Transporter</router-link>
              </li>
              <li><router-link to="user"><i class="fa fa-circle-o"></i> Admins</router-link></li>
            </ul>
          </li>
         
          <li class="header">LABELS</li>
          <!-- <li>
            <a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a>
          </li> -->
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>
</template>

export default {
    
}