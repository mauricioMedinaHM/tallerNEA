import { MentorFan } from "../components/MentorFan";
import { Reveal } from "../components/Reveal";
import { whoAmI } from "../data/slides";

export function WhoAmI() {
  return (
    <div className="quien">
      <div className="quien__texto">
        <Reveal delay={0.1}>
          <h2 className="h1">
            ¿Quién <span className="acento">soy?</span>
          </h2>
        </Reveal>

        <ul className="quien__lista">
          {whoAmI.items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.35 + i * 0.14} from="left">
              <li className="item-icono">
                <span className="icono">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <span className="item-icono__titulo">{title}</span>
                  {i === 0 && (
                    <span className="item-icono__texto">
                      {text} · <b className="acento">{whoAmI.community}</b> personas
                    </span>
                  )}
                  {i === 2 && (
                    <span className="quien__chips">
                      {whoAmI.ecosystems.map((e) => (
                        <span key={e} className="chip chip--blanco">
                          {e}
                        </span>
                      ))}
                    </span>
                  )}
                  {i !== 0 && i !== 2 && (
                    <span className={`item-icono__texto ${i === 3 ? "acento" : ""}`}>{text}</span>
                  )}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <MentorFan />
    </div>
  );
}
