import React, { memo, useRef } from 'react';
import styles from './searchBar.module.css'

const SearchBar = memo(({onSearch}) => {
  const inputRef = useRef()

  const handleSearch = () => {
    onSearch(inputRef.current.value)
  }

  const onClick = () => {
    handleSearch()
  }

  const onKeyPress = event => {
    if(event.key === 'Enter')
      handleSearch()
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logo_img} src="/images/logo.png" alt="youtube logo"/>
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} type="search" placeholder="Search..." ref={inputRef} onKeyPress={onKeyPress}/>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.button_img} src="/images/search.png" alt="search image"/>
      </button>
    </header>
  )
});

export default SearchBar;