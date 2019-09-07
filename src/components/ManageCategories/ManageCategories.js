import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";
import { getAllCategories } from '../../redux/actions';
import { connect } from "react-redux";
import CategoriesListItems from "../CategoriesListItems";
import Button from "react-bootstrap/Button";

class ManageCategories extends Component {

    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {
        return  (
            <span>
                <h3 className="mb-3">Manage Categories</h3>
                <LoadingSpinner />
                {this.props.categories !== undefined && !this.props.loading && (
                    <>
                        <Button variant="secondary" size="sm" className="m-1 mb-3"><i className="fa fa-plus"></i> Add category</Button>
                        <CategoriesListItems items={this.props.categories}/>
                    </>
                )}
            </span>
        );
    }

}

const mapStateToProps = (state) => ({ categories: state.categories, loading: state.loading });

const mapDispatchToProps = {getAllCategories: getAllCategories};

ManageCategories = connect(mapStateToProps,mapDispatchToProps)(ManageCategories);
export default ManageCategories;
