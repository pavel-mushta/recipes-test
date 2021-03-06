import React, { Component } from 'react';
import {getAllCategories, createCategory, initModal} from '../../redux/actions';
import { connect } from "react-redux";
import ListItemsCategories from "../ListItemsCategories";
import Button from "react-bootstrap/Button";
import FormElements from "../FormElements";
import {ADD_CATEGORY_FORM} from "../../forms";
import {prepareCategoriesForSelect} from "../../services";

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
                {this.props.categories !== undefined &&  (
                    <>
                        <Button variant="secondary" size="sm" className="m-1 mb-3"  onClick={() => { this.initAddModal() } }><i className="fa fa-plus"></i> Add category</Button>
                        <ListItemsCategories />
                    </>
                )}
            </>
        );
    }
}

export default connect((state) => ({ categories: state.categories }), {getAllCategories, createCategory, initModal})(ManageCategories);

