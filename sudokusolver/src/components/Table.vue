<template>
    <div>
        <div id="mainTable" class="main-table" ref="mainTable">
            <!-- Generated -->
        </div>
        <div class="bottom-area">
            <button id="solve-button" v-on:click="solveSudoku">Solve</button>
        </div>
    </div>
</template>

<script>
import TableCreator from '../Controller/TableCreator.js'
import Solver from '../Controller/Solver.js'

export default {
  name: 'Table',
  methods: {
      solveSudoku: function() {
          Solver.solveSudoku();
      }
  },
  mounted() {
      TableCreator.createTable(this.$refs.mainTable);
  }
}
</script>

<style>
.main-table {
    margin: auto;
    width: 600px;
    height: 650px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
}

.table-inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    border: 2px solid black;
}

.grid-item {
    border: 2px solid #525252;
    border-radius: 2px;
    background-color: #c4c4c4;
    padding: 1em;
    color: black;
    text-align: center;
    font-family: sans-serif;
    font-size: 120%;
}

.bottom-area {
    margin: auto;
}

.solved-value {
    color: #00ff22;
}

#solve-button {
    border-radius: 2px;
    background-color: #989db8;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}
</style>
