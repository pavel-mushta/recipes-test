import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";
import {getAllCategories, createCategory, initModal} from '../../redux/actions';
import { connect } from "react-redux";
import CategoriesListItems from "../CategoriesListItems";
import Button from "react-bootstrap/Button";
import FormElements from "../FormElements";
import {ADD_CATEGORY_FORM} from "../../forms";
import {prepareCategoriesForSelect, deleteCategoryFromContent} from "../../services";

class ManageCategories extends Component {

    initAddModal() {
        this.props.initModal({
            titleText: 'Add new category',
            isForm: true,
            bodyText: <FormElements {...ADD_CATEGORY_FORM} selectOptions={{ parentId: prepareCategoriesForSelect(this.props.categories) }} />,
            closeBtnText: 'Cancel',
            confirmBtnText: 'Add',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'success',
            confirmAddData: { type: 'ADD_CATEGORY' },
            closeHandler: (props) => { props.hideModal(); },
            formSubmitHandler: (e, props) => { this.props.createCategory(props.currentFormValues); e.preventDefault(); }
        });
    }

    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {
        return  (
            <>
                <h3 className="mb-3">Manage Categories</h3>
                <LoadingSpinner />
                {this.props.categories !== undefined && !this.props.loading && (
                    <>
                        <button onClick={() => deleteCategoryFromContent(this.props.categories, '5d765c5cf8a05f040033ec05' )}>test</button>
                        <Button variant="secondary" size="sm" className="m-1 mb-3"  onClick={() => { this.initAddModal() } }><i className="fa fa-plus"></i> Add category</Button>
                        <CategoriesListItems items={this.props.categories}/>
                    </>
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({ categories: state.categories, loading: state.loading });
const mapDispatchToProps = {getAllCategories: getAllCategories, createCategory: createCategory, initModal: initModal};
ManageCategories = connect(mapStateToProps,mapDispatchToProps)(ManageCategories);
export default ManageCategories;

