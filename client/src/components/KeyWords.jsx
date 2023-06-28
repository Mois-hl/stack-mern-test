export default function KeyWords ({ text }){
  const words = text.split(' ');

  return (
    <span>
      {words.map((word, index) => {
        const isHighlighted = word.includes('FROM') 
        || word.includes('SELECT') 
        || word.includes('WHERE')
        || word.includes('AND')
        || word.includes('INSERT')
        || word.includes('VALUES')
        || word.includes('INTO')
        || word.includes('GROUP BY')
        // const isHighlighted = word === 'FROM';

        return (
          <span key={index} style={{ color: isHighlighted ? 'blue' : 'inherit' }}>
            {`${word} `}
          </span>
        );
      })}
    </span>
  )
}