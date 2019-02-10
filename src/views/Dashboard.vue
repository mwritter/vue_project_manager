<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md4>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Matthew Ritter",
          due: "1st Mar 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non architecto eligendi magnam quisquam nesciunt omnis fuga, possimus pariatur ad officia ducimus! Recusandae quae quibusdam consequatur voluptatem nemo dolor fuga!"
        },
        {
          title: "Code up some flutter app",
          person: "Matthew Ritter",
          due: "1st Feb 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non architecto eligendi magnam quisquam nesciunt omnis fuga, possimus pariatur ad officia ducimus! Recusandae quae quibusdam consequatur voluptatem nemo dolor fuga!"
        },
        {
          title: "Finish Collage",
          person: "Virginia Ritter",
          due: "22nd May 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non architecto eligendi magnam quisquam nesciunt omnis fuga, possimus pariatur ad officia ducimus! Recusandae quae quibusdam consequatur voluptatem nemo dolor fuga!"
        },
        {
          title: "Finish up Collage",
          person: "Matthew Ritter",
          due: "4st Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non architecto eligendi magnam quisquam nesciunt omnis fuga, possimus pariatur ad officia ducimus! Recusandae quae quibusdam consequatur voluptatem nemo dolor fuga!"
        }
      ]
    };
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
</style>
