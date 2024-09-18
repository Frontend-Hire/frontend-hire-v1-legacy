type VideoEmbedProps = {
  id: string;
  title: string;
};

export default function VideoEmbed({ id, title }: VideoEmbedProps) {
  if (!id || !title) return null;

  return (
    <iframe
      width="100%"
      style={{
        aspectRatio: '16 / 9',
      }}
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
