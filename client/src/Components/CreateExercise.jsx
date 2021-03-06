import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import axios from 'axios'

import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    
        this.state = {
            username:'',
            description:'',
            duration:0,
            date: new Date(),
            users:[]
             
        }
    }

    componentDidMount(){
        axios.get('users/')
        .then(response =>{
            if(response.data.length >0){
                this.setState({
                    users:response.data.map(user=>user.username),
                    username: response.data[0].username
                })
            }
        })
    }
    onChangeUsername =(event)=>{
        this.setState({username:event.target.value})
    }

    onChangeDescription = (event=>{
        this.setState({description:event.target.value})
    })

    onChangeDuration = (event =>{
        this.setState({duration:event.target.value})
    });

    onChangeDate = (date)=>{
        this.setState({date:date})
    }

    onSubmit= async (e)=>{
        e.preventDefault();
        const exercise ={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        console.log(exercise);
        // axios.post('/exercises/add',exercise)
        // .then(res=>console.log(res.data))
        let response = await fetch(`/exercises/add`,{
            method:"POST",
            headers:{
                "Accept": "application/json",
            "content-type": "application/json"
            },
            body:JSON.stringify(exercise)
        })
        let json = await response.json();
        console.log(json);
        window.location ='/';
    }
    render() {
        return (
            <div>
                <h1>Create New Exercise Log</h1>
                <form onSubmit ={this.onSubmit}>
                    <div className ="form-group">
                        <label htmlFor="">Username:</label>
                        <select  className="form-control" name="" id="" required value ={this.state.username} onChange={this.onChangeUsername}>
                            {this.state.users.map((user)=>{
                                return(
                                    <option  key ={user} value ={user}>{user}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className ="form-group">
                        <label htmlFor="">Description:</label>
                        <input placeholder = "Description" className="form-control" type="text" name="" id="" value = {this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor="">Duration (in minutes):</label>
                        <input className = "form-control" type="number" name="" id="" value = {this.state.duration} onChange = {this.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Date:</label>
                        <div>
                            <DatePicker
                            selected= {this.state.date}
                            onChange={this.onChangeDate}></DatePicker>
                        </div>


                    </div>
                    <div className = "form-group">
                        <input type="submit" value="Create Exercise Log" className =" btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}