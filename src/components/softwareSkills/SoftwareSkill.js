import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <style>
        {`
          .firebase-icon {
            color: #FFCA28 !important;
          }

          .database-icon {
            color: #0f80cc !important;
          }

          /* ألوان للمهارات الجديدة */
          .secure-storage-icon {
            color: #FF5252 !important; /* أحمر للأمان */
          }

          .localization-icon {
            color: #8BC34A !important; /* أخضر فاتح */
          }

          .theme-icon {
            color: #9C27B0 !important; /* بنفسجي */
          }

          /* ضمان ظهور ألوان أيقونات Devicon بشكل صحيح */
          .devicon-flutter-plain.colored {
            color: #02569B !important;
          }

          .devicon-dart-plain.colored {
            color: #0175C2 !important;
          }

          .rest-api-icon {
            color: #61DAFB !important; /* أزرق فاتح */
          }

          .json-icon {
            color: #F0DB4F !important; /* أصفر */
          }

          .shared-pref-icon {
            color: #4CAF50 !important; /* أخضر */
          }

          .provider-icon {
            color: #9C27B0 !important; /* بنفسجي */
          }

          .cubit-icon {
            color: #FF5722 !important; /* برتقالي محمر */
          }

          /* تخصيص حجم الأيقونات للتوحيد */
          .software-skill-inline i {
            font-size: 1.5rem;
          }

          /* تحسين مظهر القائمة */
          .dev-icons {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
          }

          .software-skill-inline {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 5px;
            transition: transform 0.2s;
          }

          .software-skill-inline:hover {
            transform: translateY(-5px);
          }

          .software-skill-inline p {
            margin-top: 6px;
            font-size: 12px;
          }
        `}
      </style>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname.startsWith("devicon-") ? (
                  <i className={skills.fontAwesomeClassname}></i>
                ) : (
                  <i className={`${skills.fontAwesomeClassname} ${skills.customColorClass || ""}`}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}