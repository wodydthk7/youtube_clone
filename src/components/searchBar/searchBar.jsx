import React, { memo, useRef } from 'react';
import styles from './searchBar.module.css'

const SearchBar = memo(({onClick, onSearch}) => {
  const inputRef = useRef()

  const handleClickLogo = () => {
    onClick()
  }

  const handleSearch = () => {
    onSearch(inputRef.current.value)
  }

  const handleKeyPress = event => {
    if(event.key === 'Enter')
      handleSearch()
  }

  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={handleClickLogo}>
        <img className={styles.logo_img} src="/images/logo.png" alt="youtube logo"/>
        <h1 className={styles.title}>Youtube</h1>
      </button>
      <input className={styles.input} type="search" placeholder="Search..." ref={inputRef} onKeyPress={handleKeyPress}/>
      <button className={styles.button} type="submit" onClick={handleSearch}>
        <img className={styles.button_img} src="/images/search.png" alt="search image"/>
      </button>
    </header>
  )
});

export default SearchBar;