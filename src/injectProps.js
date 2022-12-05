export default function injectProps(data) {
  return data.replace(/(<svg )(.+?)(>)/gm, `$1 $2 {...props}$3`);
}
