import React from "react";
import { Component } from "react"
import NYTdisplay from "./nyt";
let baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
// const key: string = process.env.KEY probably?
let url:string;
// let pageNumber: number;
type StateType = {
    searchData: string[]
    search: string,
    startDate: string,
    endDate: string,
    pageNumber: number,

}
class NYT extends Component<{},StateType>{
    constructor(props: string){
        super(props)
        this.state = {
            searchData: [],
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0
        }
    }
    
    searchNYT(e: React.FormEvent<HTMLInputElement>){
        e.preventDefault()
        
        if(this.state.startDate){
            url += '&begin_date=' + this.state.startDate
            console.log('StartDateURL:', url)
        }
        if(this.state.endDate){
            url += '&end_date=' + this.state.endDate
            console.log('EndDateURL:', url)
        }
        fetch(url)
        .then(res=> res.json())
        .then(json => console.log(json))
        
        .catch(e => console.log("error caught: ",e))
        // if(this.state.search){
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(json => this.setState({searchData: json}))
        // }else {null}
    }

    nextPage(e: React.MouseEvent<HTMLInputElement, 'click'>){
        this.setState({pageNumber: this.state.pageNumber + 1})
        // this.searchNYT()
    }

    prevPage(){
        if(this.state.pageNumber > 0){
            this.setState({pageNumber: this.state.pageNumber - 1})
        }else {return}
        // this.searchNYT()
    }

    updateInput(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            search: e.target.value
        })
    }

    render(){
        return(
            <div>
                <div>
                    <NYTdisplay/>
                </div>
                {/* <h2>Search the New York Times Database!</h2>
                <form onSubmit={e=>this.searchNYT(e)}>
                    <br />
                    <br />
                    <label htmlFor="search">Enter a SINGLE search term (required):</label>
                    
                    <input type="text" placeholder="search" value={this.state.search} onChange={e => this.updateInput(e)} required/>
                    <br />
                    <br />
                    <label htmlFor="search">Enter start date (format YYYYMMDD):</label>
                    <input type='date'pattern="[0-9]{8}"/>
                    <br />
                    <br />
                    <label htmlFor="search">Enter end date (format YYYYMMDD):</label>
                    <input type='date' pattern="[0-9]{8}"/>
                    <br />
                    <br />
                <button type='submit' value='submit'>Search!</button>
                </form>
                <br/>
                <br/>
                <button onClick={ e => this.prevPage()}>Prev10</button> */}
                {/* <button onClick={e => this.nextPage()}>Next10</button> */}
            </div>
        )
    }
}
export default NYT