export default function convertTags(data) {
  const tags = data.match(/([a-z]+\-[a-z]+)/gm) || [];

  tags.forEach((tag) => {
    let [start, end] = tag.split('-');

    if (data.indexOf(tag) === -1) return;

    data = data.replace(tag, `${start}${end[0].toUpperCase() + end.substring(1)}`);
  });

  return data;
}
