import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../actions/categories';

class AllCategories extends Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <p>All Categories:</p>
        <ul>
          {categories.length > 0 &&
            categories.map(category => (
              <li key={category.path}>
                <a href={category.path}>{category.name}</a>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(mapStateToProps, { fetchAllCategories })(AllCategories);