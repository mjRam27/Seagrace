export default function Strip() {
  const content = (
    <>
      Backend Systems <i>✦</i> AI &amp; RAG <i>✦</i> Mobile Apps <i>✦</i> Realtime Systems <i>✦</i> Cloud &amp; DevOps <i>✦</i> System Design <i>✦</i>&nbsp;
    </>
  );
  return (
    <div className="strip">
      <div className="strip__track">
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}
