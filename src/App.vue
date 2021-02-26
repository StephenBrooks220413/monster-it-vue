<template>
  <div id="nav">
    <!-- Navbar-->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid justify-content-between">
        <!-- Left elements -->
        <div class="d-flex">
          <!-- Brand -->
          <router-link class="nav-item" to="/">
            <a
              class="navbar-brand me-2 mb-1 d-flex align-items-center"
              href="#"
            >
              <img
                src="./assets/monster.png"
                height="40"
                alt=""
                style="margin-top: 2px;"
              />
            </a>
          </router-link>
        </div>
        <!-- Left elements -->

        <!-- Right elements -->
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-3 me-lg-1">
            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
              <img
                src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                class="rounded-circle"
                height="22"
                alt=""
              />
              <strong class="d-none d-sm-block ms-1">Stephen</strong>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <a class="nav-link" href="#">
              <span><i class="fas fa-plus-circle fa-lg"></i></span>
            </a>
          </li>
          <li class="nav-item dropdown me-3 me-lg-1">
            <a
              class="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-comments fa-lg"></i>

              <span class="badge rounded-pill badge-notification bg-danger"
                >6</span
              >
            </a>
          </li>
          <li class="nav-item dropdown me-3 me-lg-1">
            <a
              class="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bell fa-lg"></i>
              <span class="badge rounded-pill badge-notification bg-danger"
                >12</span
              >
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <router-link class="dropdown-item active" to="/"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item active" to="/about"
                  >About</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item active" to="/gallery"
                  >Gallery</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown me-3 me-lg-1">
            <a
              class="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-chevron-circle-down fa-lg"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <router-link class="dropdown-item active" to="/"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item active" to="/about"
                  >About</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item active" to="/gallery"
                  >Gallery</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Right elements -->
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "~mdb-ui-kit/css/mdb.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-bottom: 25px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
