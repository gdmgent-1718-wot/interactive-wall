<template>
    <section>
        <header class="dashboard__header">
            <img src="../../../assets/logo.png">
        </header>
        <nav class="dashboard__nav">
            <ul>
                <li><i class="fa fa-home" aria-hidden="true"></i>Home</li>
                <li><h2>Interactive Wall</h2></li>
                <li><router-link to="/dashboard/paintings"><i class="fa fa-picture-o" aria-hidden="true"></i>Tekeningen</router-link></li>
                <li><h2>Account</h2></li>
                <li><i class="fa fa-user" aria-hidden="true"></i>Users</li>
                <li><i class="fa fa-shield" aria-hidden="true"></i>Rolen</li>
            </ul>
        </nav>
    </section>
</template>

<script>

export default {
  name: "Navigatie",
  data() {
    return {
    };
  },
  mounted() {
    console.log('Navigatie COmponent mounted');
  }
};
</script>