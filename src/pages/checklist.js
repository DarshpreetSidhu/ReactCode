import React, { Component } from 'react';

class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checklist: {
                title: '',
                date: '',
                description: ''
            },
            error: {
                title: '',
                date: '',
                description: ''
            },
            records: []
        }
    }

    handleInput = (event) => {
        let data = { ...this.state.checklist, [event.target.name]: event.target.value }
        this.setState({
            checklist: data
        })
    }

    onCreateChecklist() {
        this.state.records.push(this.state.checklist);
        this.setState({
            records: this.state.records
        })
    }

    onDelete(index) {
        this.state.records.splice(index, 1);
        this.setState({
            records: this.state.records
        })
    }

    render() {
        let listOfData = this.state.records.map((record, index) => {
            return (
                <tr key={index}>
                    <td>{record.title}</td>
                    <td>{record.date}</td>
                    <td>{record.description}</td>
                    <td>
                        <button onClick={() => this.onDelete(index)}>Delete</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h4>ToDo - Checklist</h4>
                <input type="text" placeholder="Enter the task Title" name="title" onChange={this.handleInput} />
                <input type="text" placeholder="Enter the task Description" name="description" onChange={this.handleInput} />
                <input type="date" name="date" onChange={this.handleInput} />
                <button className="btn" onClick={() => this.onCreateChecklist()}>Create Checklist</button>
                <div>
                    <table id="checklist">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Due Date</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.records.length > 0 ? listOfData :
                                <tr>
                                    <td colSpan="4">No Checklist Found</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Checklist;