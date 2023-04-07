<template>
  <li class="team-logo-list-item">
    <div class="team-logo-list-img-container">
      <div class="team-logo-list-img"></div>
      <span class="team-logo-list-border"></span>
    </div>
  </li>
</template>

<style scoped>
.team-logo-list-item:not(:first-child) {
  padding-top: 15px;
}

.team-logo-list-img-container {
  display: flex;
  align-items: center;

  cursor: progress;
}

.team-logo-list-img {
  clip-path: circle();
  width: 105px;
  height: 55px;
  background-color: #ddd;
}

.team-logo-list-border {
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: #ddd;
  margin-left: 5px;
}
</style>
