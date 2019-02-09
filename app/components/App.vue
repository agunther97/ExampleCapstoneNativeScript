<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text=""  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <!--<Label class="drawer-header" text="Drawer"/>-->

                <Label class="drawer-item" text="Item 1"/>
                <Label class="drawer-item" text="Item 2"/>
                <Label class="drawer-item" text="Item 3"/>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">
                <Label class="message" :text="this.getUsers()" col="0" row="0"/>
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script lang="ts">
import {ExampleService, User} from '../services/ExampleService';
import axios from 'axios';
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component
export default class App extends Vue {
    public msg = "Hey";

    private getUsers(): string {
        axios({method: "GET", "url": "http://10.0.2.2:8000/api/v1/users/1"}).then(x => {
            console.log(x.data)
            let user: User = x.data as User; 
            this.msg = user.first_name;
        }, error => {
            this.msg = "error";
            console.log(error);
        });
        return this.msg;
    }
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
