export default function Strip() {
  const content = (
    <>
      Turn ideas into opportunities <i>✦</i> Web <i>✦</i> Mobile <i>✦</i> AI &amp; ML <i>✦</i> Realtime <i>✦</i> Product design <i>✦</i> Engineering <i>✦</i>&nbsp;
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
