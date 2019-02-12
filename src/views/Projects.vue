<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Matthew Ritter";
      });
    }
  }
};
</script>
<style>
</style>

