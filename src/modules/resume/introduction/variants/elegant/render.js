import React from 'react';

const useStyles = theme => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Block:{
    padding: '20px'
  },
  paragraph: {
    margin: 0,
    textAlign: 'center'
  },
  smallBlock: {
    display: 'block',
    width: '10%',
    height: '1px',
    border: '0',
    borderTop: `5px solid ${theme.value.color}`,
    margin: '10px auto 0 auto'
  }
});

const Basic = ({ theme, headlineText, paragraphs }) => {
  const styles = useStyles(theme);

  return (
    <div style={styles.Block}>
      <div style={styles.smallBlock}></div>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      {paragraphs.value.map((paragraph, id) => {
        return (
          <div key={id}>
            <br />
            <p style={styles.paragraph}>{paragraph.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Basic;
