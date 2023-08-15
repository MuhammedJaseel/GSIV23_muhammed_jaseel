import React, { Component } from "react";
import "../styles/home.css";
import { getMovieList, getMovieListBySearch } from "../module/movie";

export default class HomeScreen extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      movieList: [],
      selected: null,
    };
  }

  componentDidMount(): void {
    this._getAllMovies();
  }

  _getAllMovies = () => {
    getMovieList()
      .then((res: any) => {
        this.setState({ movieList: res.data.results });
      })
      .catch((e) => {});
  };

  _onSearch = (e: any) => {
    if (e.target.value === "") this._getAllMovies();
    else
      getMovieListBySearch(e.target.value)
        .then((res: any) => {
          this.setState({ movieList: res.data.results });
        })
        .catch((e) => {});
  };

  render() {
    const { movieList, selected }: any = this.state;
    return (
      <div className="homeScreen">
        <div className="header">
          <input
            className="searchBar"
            placeholder="Search"
            style={selected === null ? {} : { display: "none" }}
            onChange={this._onSearch}
          />
          <div
            className=""
            style={selected === null ? { display: "none" } : {}}
          >
            {selected?.title}
          </div>
          <div
            className="homeIcon"
            onClick={() => this.setState({ selected: null })}
          />
        </div>
        <div className="body">
          <div
            className="bodyList"
            style={selected === null ? {} : { display: "none" }}
          >
            {movieList.map((it: any, k: number) => (
              <div
                className="eachMovie"
                key={k}
                onClick={() => this.setState({ selected: it })}
              >
                <img
                  className="image"
                  src={"https://image.tmdb.org/t/p/w500" + it.backdrop_path}
                />
                <div className="details">
                  <div className="title">
                    <div className="name">{it.title}</div>
                    <div className="raiting">({it.vote_average})</div>
                  </div>
                  <div className="desc">{it.overview}</div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="detailsBody"
            style={selected === null ? { display: "none" } : {}}
          >
            <img
              className="detailsRow1"
              src={"https://image.tmdb.org/t/p/w500" + selected?.backdrop_path}
            />
            <div className="detailsRow2">
              <div className="detailsTitle">
                {selected?.title}
                <div className="detailsRating">(Rating)</div>
              </div>
              <div className="">
                {selected?.release_date?.split("-")[0]} | Length | Director{" "}
              </div>
              <div className="">Cast: Actor 1, Actor 2, ... </div>
              <div className="">Description: {selected?.overview}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
