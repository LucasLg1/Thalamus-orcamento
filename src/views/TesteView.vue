<template>
  <div>
    <JsonExcel :data="dataForExcel" />
  </div>
</template>
<script>
 
  export default {
    components: {
    },
    data: () => {
      return {
        dataForExcel: [
          { colA: "Hello", colB: "World" },
          {
            colA: "Multi-line",
            /* Multi-line value: */
            colB:
              "This is a long paragraph\nwith multiple lines\nthat should show in a single cell.",
          },
          { colA: "Another", colB: "Regular cell" },
        ],
      };
    },
  };
</script> 

