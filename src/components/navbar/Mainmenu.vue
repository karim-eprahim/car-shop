<template>
  <div>
    <!-- <ul class="nav">
      <router-link class="router" to="/">
        <a>Home</a>
      </router-link>
      <router-link to="/about">
        <a>About</a>
      </router-link>
      <router-link to="/Categories">
        <a>Categories</a>
      </router-link>
      <router-link to="/contact">
        <a>Contact</a>
      </router-link>
    </ul> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Auto Car</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="router nav-link" to="/">
                <a>Home</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="router nav-link" to="/about">
                <a>About</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="router nav-link" to="/Categories">
                <a>Categories</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="router nav-link" to="/contact">
                <a>Contact</a>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Mainmenu",
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.router a {
  transition: 0.4s;
}
.router a:hover {
  font-weight: bold;
}
a.router-link-active.router-link-exact-active.router.nav-link {
  color: rgb(80, 79, 79);
  border-bottom: 2px solid;
}
</style>
