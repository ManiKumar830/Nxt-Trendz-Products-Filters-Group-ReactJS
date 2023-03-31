import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {searchInput} = props

  const renderRatingFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props

      const onClickRating = () => changeRating(rating.ratingId)

      const ratingClass =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          key={rating.ratingId}
          onClick={onClickRating}
          className="rating-list-container"
        >
          <img
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
            src={rating.imageUrl}
          />
          <p className={ratingClass}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <>
      <h1 className="category-heading">Rating</h1>
      <ul className="category-ul-container">{renderRatingFiltersList()}</ul>
    </>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props

      const onClickCategory = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId

      const className = isActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          onClick={onClickCategory}
          className="category-list"
          key={category.categoryId}
        >
          <p className={className}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategory = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-ul-container">{renderCategoryList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props

    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props

    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => (
    <div className="input-container">
      <input
        value={searchInput}
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
        placeholder="Search"
        className="inputEl"
        type="search"
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const onClickClearFilter = () => {
    const {clearFilters} = props

    clearFilters()
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderRatingFilters()}
      <button
        onClick={onClickClearFilter}
        type="button"
        className="clear-filter-button"
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
