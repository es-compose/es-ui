<template>
  <div id="app" class="container">
    <h1 class="display-4">Components Playground</h1>
    <hr/>
  
    <div class="">
      <Control :model="field" />
      <pre>{{ field }}</pre>
      <br/>
      
      <NavBar :items="items">
        <a slot="brand" href="">Hello Nav</a>
        <NavList :items="items" />
      </NavBar>
      <br/>

      <Modal size="sm" :show="true">
       
      </Modal>

      <NavList align="fill" :items="items" layout="tabs" active="item 2">
      </NavList>
      <br/>

      <ButtonGroup size="lg">
        <es-button styling="primary">Button 1</es-button>
        <es-button styling="warning">Button 2</es-button>
      </ButtonGroup>
      <br/><br/>

      <es-button @click="openDialog" :disabled="false" size="sm" styling="outline-danger">Show Dialog</es-button>
      <Modal size="sm" :show="dialogState" @ok="closeDialog" @close="closeDialog">
        Hello From Modal Dialog Box
        <b slot="close-label">Cancel</b>
        <b slot="ok-label">Done</b>
      </Modal>
      <br/><br/>

      <Alert @closed="closed" styling="danger" :dismissible="true">Error has occured!!!</Alert>
  
      <List :items="arr" />
  
      <Breadcrumb :items="items" />
  
      <Card :model="card" styling="success" inverse>
        <div slot="header">Hello</div>
      </Card>
      <br/>

      <Cards class="myclass" :models="cards" layout="deck"></Cards>
      <br/>

      <ListGroup :items="lists" />
      <br/>

      
    </div>
  </div>
</template>

<script>
import Alert from './components/Alert.vue';
import List from './components/List.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Card from './components/Card.vue';
import Cards from './components/Cards.vue';
import ListGroup from './components/ListGroup.vue';
import NavList from './components/NavList.vue';
import Modal from './components/Modal.vue';
import Button from './components/Button.vue';
import ButtonGroup from './components/ButtonGroup.vue';
import NavBar from './components/NavBar.vue';
import InputControl from './components/Input.vue';
import Control from './components/Control.vue';


export default {
  name: 'app',
  components: {
    Alert,
    List,
    Breadcrumb,
    Card,
    Cards,
    ListGroup,
    NavList,
    Modal,
    'es-button': Button,
    ButtonGroup,
    NavBar,
    InputControl,
    Control
  },

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr: [
        'Arr 1',
        'Arr 2'
      ],

      items: {
        'item 1': 'link 1',
        'item 2': 'link 2',
        'item 3': null
      },

      fieldname: null,

      field: {
        label: "Full name",
        value: '',
        type: 'select',
        data: [
          'Hello',
          { text: 'World', value : 'world' }
        ]
      },

      card: {
        title: 'Hello from Card',
        text: 'This is a text from card. bla bal',
        content: '<b>This</b> is <u>Content</u>'
      },

      cards: [
        { title: 'Card 1', text: 'Card Text 1' },
        { title: 'card 2', text: 'card text 2' },
        { title: 'card 3', text: 'card text 3', styling: 'info', inverse: true }
      ],

      lists: [
        {
          text: 'Item 1',
          link: '/some/link',
          badge: 2,
          active: true
        },
        {
          text: 'Item 2'
        }
      ],

      dialogState: false
    }
  },

  methods: {
    closed() {
      alert('closed!');
    },

    openDialog() {
      this.dialogState = true;
    },

    closeDialog() {
      this.dialogState = false;
    }
  }
}
</script>

<style lang="scss">

</style>
