/*jshint esversion: 6*/
// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Fixed contact button
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(elems, {});
});