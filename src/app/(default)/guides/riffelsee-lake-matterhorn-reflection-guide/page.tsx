import Link from 'next/link';
import GuideLayout, {
  GuideFaq,
  GuideTable,
  GuideVerdict,
  GuideVerdictGrid,
  LiveConditionCallout,
} from '@/components/GuideLayout';
import { PLANNING_GUIDE_UPDATED, planningGuideMetadata } from '@/lib/planning-guides';
import { buildStaticGuideJsonLd } from '@/lib/schema';

export const revalidate = 900;

const PATH = '/guides/riffelsee-lake-matterhorn-reflection-guide';
const TITLE = 'Riffelsee Matterhorn Reflection | Time & Wind';
const DESCRIPTION =
  'Complete guide to photographing the iconic Matterhorn reflection at Lake Riffelsee. Best morning hours, wind speed limits for still water, seasonal thaw dates, and walking directions from Rotenboden.';

const WALK_STEPS = [
  {
    anchor: 'exit-rotenboden',
    name: 'Leave Rotenboden station',
    text: 'Get off the Gornergrat Bahn at Rotenboden station (2,815 m) and take the signed path toward the lake. On the train up from Zermatt, sit on the right-hand side so the east face is in view before you walk.',
  },
  {
    anchor: 'downhill-to-shore',
    name: 'Walk downhill to the shore',
    text: 'The path drops about 300 metres and takes about 10 minutes. The shore sits near 2,757 m.',
  },
  {
    anchor: 'face-the-peak',
    name: 'Set up facing the east face',
    text: 'Stand on the near bank with the pyramid in front of you. The reflection holds when the wind is under 10 km/h and the live score shows the summit fully exposed.',
  },
];

const FAQS = [
  {
    question: 'When can you see a Matterhorn reflection in Riffelsee?',
    answer:
      'From late June or early July through October, once the lake has thawed. From November until then the water is frozen under snow and there is no mirror.',
  },
  {
    question: 'What wind speed keeps the Riffelsee reflection sharp?',
    answer:
      'Under 10 km/h, and before about 10:30, when thermal breezes start to ripple the surface. After that the summit can still be clear while the reflection is gone.',
  },
];

export const metadata = planningGuideMetadata(TITLE, DESCRIPTION, PATH);

export default function RiffelseeReflectionGuidePage() {
  const jsonLd = buildStaticGuideJsonLd({
    path: PATH,
    headline: TITLE,
    description: DESCRIPTION,
    breadcrumb: 'Riffelsee reflection',
    datePublished: PLANNING_GUIDE_UPDATED,
    dateModified: PLANNING_GUIDE_UPDATED,
    image: '/guides/riffelsee-shore-walk.jpg',
    faqs: FAQS,
    howTo: {
      name: 'Walk from Rotenboden station to the Riffelsee shore',
      description:
        'A 10-minute downhill walk from Rotenboden station (2,815 m) to the shore of Riffelsee for the Matterhorn reflection.',
      totalTime: 'PT10M',
      steps: WALK_STEPS,
    },
  });

  return (
    <GuideLayout
      path={PATH}
      breadcrumb="Riffelsee reflection"
      title={TITLE}
      description={DESCRIPTION}
      jsonLd={jsonLd}
    >
      <h2>Quick verdict: three golden rules</h2>
      <p>
        Riffelsee mirrors the east face only when the water is liquid, the air is still, and the
        summit is actually out of cloud. Miss one of the three and you still get a fine view of
        the mountain. You do not get the reflection.
      </p>
      <GuideVerdictGrid columns={3}>
        <GuideVerdict tone="emerald" label="Rule 1 · Wind">
          Morning wind under 10 km/h. After about 10:30, thermal breezes ripple the surface even
          when the sky stays clear.
        </GuideVerdict>
        <GuideVerdict tone="emerald" label="Rule 2 · Summit">
          Cloud ceiling above 4,500 m. A live score of 8/10 or higher means the 4,478 m summit is
          exposed. Anything lower clips the pyramid.
        </GuideVerdict>
        <GuideVerdict tone="amber" label="Rule 3 · Season">
          The lake is frozen solid under snow from November until late June or early July. The
          mirror season is the thaw through October.
        </GuideVerdict>
      </GuideVerdictGrid>

      <LiveConditionCallout mode="reflection" />

      <h2>Trail from Rotenboden</h2>
      <p>
        Take the Gornergrat Bahn from Zermatt and get off at <strong>Rotenboden station (2,815 m)</strong>.
        The lake is not at the summit station. Gornergrat itself is one stop higher, and the
        reflection is the short walk down from Rotenboden.
      </p>
      <ol id="walk">
        {WALK_STEPS.map((step) => (
          <li key={step.anchor} id={step.anchor}>
            <strong>{step.name}.</strong> {step.text}
          </li>
        ))}
      </ol>
      <p>
        Optional continuation: trail 21 descends from the lake to Riffelberg. Allow about an hour.
        The grade is easy enough for families. Rejoin the cogwheel at Riffelberg for the ride back
        to Zermatt.
      </p>
      <p>
        The wider viewpoint list, including Stellisee, is in the{' '}
        <Link href="/guides/best-matterhorn-photo-viewpoints">photo viewpoints guide</Link>.
        Gornergrat versus the cable car is in the{' '}
        <Link href="/guides/gornergrat-vs-glacier-paradise">viewpoint comparison</Link>.
      </p>

      <h2>Photography cheat sheet</h2>
      <p>
        True sunrise at the lake is often before the first summer train. The first Gornergrat
        departure is the earliest reflection you can reach without hiking up in the dark, and the
        east face is still in low light when you arrive. Golden hour is the other reliable window.
      </p>
      <GuideTable
        caption="What to bring to the shore"
        headers={['Choice', 'Use it when']}
        rows={[
          [
            '16–35 mm',
            'You want the whole pyramid and the near shore in one frame.',
          ],
          [
            '24–70 mm',
            'You want a tighter pyramid and less empty sky, especially if people are on the far bank.',
          ],
          [
            'First train, summer',
            'The earliest practical arrival. East-face light is still low, and the wind is more likely under 10 km/h.',
          ],
          [
            'After 10:30',
            'Expect ripples. The summit can stay clear while the reflection breaks up.',
          ],
        ]}
      />

      <GuideFaq id="riffelsee-faq" items={FAQS} />
    </GuideLayout>
  );
}
