export interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Au niveau de la moelle le noyau de la sensibilité proprioceptive relative au tronc est celui :",
    options: {
      A: "De l'apex de la corne dorsale.",
      B: "De l'isthme de la corne dorsale.",
      C: "Du cordon latéral.",
      D: "Du cordon dorsal.",
      E: "De la colonne de 'Clarke'."
    },
    correctAnswer: 'E'
  },
  {
    id: 2,
    question: "Au niveau de la moelle épinière le noyau de 'Betcherew' est situé au niveau :",
    options: {
      A: "De l'apex de la substance grise.",
      B: "De l'isthme de la substance grise.",
      C: "De la base de la substance grise.",
      D: "De la colonne de 'Clarke'.",
      E: "Du cordon dorsal."
    },
    correctAnswer: 'B'
  },
  {
    id: 3,
    question: "Le faisceau spino-thalamique ventral :",
    options: {
      A: "Conduit la sensibilité thermo-algésique.",
      B: "Chemine en arrière du canal épendymaire.",
      C: "S'articule avec un troisième neurone au niveau du cordon ventral homolatéral de la moelle.",
      D: "Se coude au niveau du cordon homolatéral de la moelle.",
      E: "Se coude au niveau du cordon ventro-latéral de la moelle."
    },
    correctAnswer: 'E'
  },
  {
    id: 4,
    question: "La voie de la motricité automatique :",
    options: {
      A: "Est appelée voie de la motricité volontaire.",
      B: "Prend origine au niveau du cortex cérébral.",
      C: "Prend origine au niveau des différents étages sous corticaux.",
      D: "Les 4/5 des neurones formant la voie de la motricité automatique est qui sera croisée.",
      E: "Le 1/5 des neurones formant la voie de la motricité automatique est homolatérale."
    },
    correctAnswer: 'C'
  },
  {
    id: 5,
    question: "Dans le tact épicritique, la liaison entre la moelle et le cervelet est assurée par le noyau :",
    options: {
      A: "De 'Betcherew'",
      B: "De 'Sherington'",
      C: "De 'Fleschig'",
      D: "De 'Von Monakow'",
      E: "De 'Gowers'"
    },
    correctAnswer: 'D'
  },
  {
    id: 6,
    question: "Au niveau du sillon bulbo-protubérantiel, on retrouve l'émergence des crâniens suivants :",
    options: {
      A: "III, V et le VI.",
      B: "VI, IX, le VII et le VIIbis.",
      C: "VI, IV et le III.",
      D: "VII, VIIbis et le IV.",
      E: "VI, VII, VIIbis et le VIII."
    },
    correctAnswer: 'E'
  },
  {
    id: 7,
    question: "Les bandelettes optiques se prolongent postérieurement par :",
    options: {
      A: "Uniquement les corps genouillés latéraux.",
      B: "Uniquement les tubercules quadrijumeaux.",
      C: "Par les corps genouillés latéraux et les tubercules quadrijumeaux.",
      D: "Par les corps genouillés médiaux et les tubercules quadrijumeaux.",
      E: "Par les corps genouillés médiaux, latéraux et les tubercules quadrijumeaux."
    },
    correctAnswer: 'E'
  },
  {
    id: 8,
    question: "La lame quadrijumelle est formée :",
    options: {
      A: "Des tubercules quadrijumeaux et des corps genouillés médiaux.",
      B: "Des tubercules quadrijumeaux et des corps genouillés latéraux.",
      C: "Uniquement par des tubercules quadrijumeaux.",
      D: "Uniquement par des corps genouillés médiaux.",
      E: "Des tubercules quadrijumeaux et pédoncules cérébraux."
    },
    correctAnswer: 'C'
  },
  {
    id: 9,
    question: "Entre les deux bouquets de 'Bochdalek' on retrouve :",
    options: {
      A: "Le trou de 'Luschka'.",
      B: "Le trou de 'Magendie'.",
      C: "La valvule de 'Tarin'.",
      D: "La valvule de 'Vieussens'",
      E: "La ligula."
    },
    correctAnswer: 'B'
  },
  {
    id: 10,
    question: "Concernant le locus niger :",
    options: {
      A: "Il est situé dans un plan sagittal du pédoncule cérébral.",
      B: "Il divise le pédoncule cérébral en deux parties : en avant la calotte et en arrière le pied.",
      C: "Il divise le pédoncule cérébral en deux parties : en avant le pied et en arrière la calotte.",
      D: "Il divise le pédoncule cérébral en deux parties : en dedans la calotte et en dehors le pied.",
      E: "Il divise le pédoncule cérébral en deux parties : en dedans le pied et en dehors la calotte."
    },
    correctAnswer: 'C'
  },
  {
    id: 11,
    question: "Les noyaux du pont occupent :",
    options: {
      A: "En haut, une partie des pédoncules cérébraux.",
      B: "La paroi antérolatérale de la protubérance annulaire.",
      C: "Le plancher du quatrième ventricule.",
      D: "Le milieu de la protubérance en situation sagittale.",
      E: "Le milieu de la protubérance en situation frontale."
    },
    correctAnswer: 'B'
  },
  {
    id: 12,
    question: "Au niveau du tronc cérébral arrive :",
    options: {
      A: "Le deutoneurone du faisceau de 'Goll et Burdach'.",
      B: "Le protoneurone du faisceau de 'Goll et Von Monakow'.",
      C: "Le deutoneurone du faisceau de 'Burdach et Von Monakow'.",
      D: "Le deutoneurone du faisceau de 'Von Monakow'.",
      E: "Le protoneurone du faisceau de 'Goll et Burdach'."
    },
    correctAnswer: 'E'
  },
  {
    id: 13,
    question: "Le faisceau spino-cérébelleux de 'Fleschig' :",
    options: {
      A: "Rejoint le cervelet homolatéral par le pédoncule cérébelleux inférieur.",
      B: "Rejoint le cervelet controlatéral par le pédoncule cérébelleux moyen.",
      C: "Rejoint le cervelet homolatéral par le pédoncule cérébelleux supérieur.",
      D: "Conduit la sensibilité proprioceptive inconsciente relative aux membres.",
      E: "C'est l'un des faisceaux hétérogènes."
    },
    correctAnswer: 'A'
  },
  {
    id: 14,
    question: "Le faisceau spino-cérébelleux de 'Gowers' :",
    options: {
      A: "Conduit la sensibilité proprioceptive inconsciente relative au tronc.",
      B: "A une projection cérébelleuse homolatérale sans décussation dans la protubérance.",
      C: "A une projection cérébelleuse homolatérale après décussation dans la protubérance.",
      D: "A une projection cérébelleuse controlatérale sans décussation dans la protubérance.",
      E: "A une projection cérébelleuse controlatérale après décussation dans la protubérance."
    },
    correctAnswer: 'C'
  },
  {
    id: 15,
    question: "Le deutoneurone de la voie ascendante du faisceau cochléaire est formé :",
    options: {
      A: "De 75% de neurones homolatéraux et 25% de neurones controlatéraux.",
      B: "De 50% de neurones homolatéraux et 50% de neurones controlatéraux.",
      C: "De 25% de neurones homolatéraux et 75% de neurones controlatéraux.",
      D: "De 10% de neurones homolatéraux et 90% de neurones controlatéraux.",
      E: "De 90% de neurones homolatéraux et 10% de neurones controlatéraux."
    },
    correctAnswer: 'C'
  },
  {
    id: 16,
    question: "La voie cortico-nucléaire se divise en deux faisceaux à cheminement différent :",
    options: {
      A: "Le cortico-nucléaire passe en arrière du locus niger.",
      B: "Le cortico-nucléaire passe en avant du locus niger occupant le 1/5 interne.",
      C: "L'oculo-céphalo-gyre passe en avant du locus niger occupant le 1/5 interne.",
      D: "Le cortico-nucléaire passe en avant du locus niger occupant le 1/5 externe.",
      E: "Les deux faisceaux cheminent en avant du locus niger, l'un occupe 1/5 interne, l'autre 1/5 externe."
    },
    correctAnswer: 'B'
  },
  {
    id: 17,
    question: "La face supérieure du thalamus est divisée en deux parties dont la latérale correspond :",
    options: {
      A: "Au troisième ventricule.",
      B: "Au ventricule latéral.",
      C: "Au noyau caudé.",
      D: "Au noyau lenticulaire.",
      E: "Au centre ovale."
    },
    correctAnswer: 'B'
  },
  {
    id: 18,
    question: "Dans les ventricules latéraux, le plexus choroïde :",
    options: {
      A: "Est situé au niveau du toit.",
      B: "Est situé au niveau du plancher.",
      C: "Est fixé à la paroi latérale.",
      D: "Est fixé à la paroi médiale.",
      E: "Occupe tous les ventricules."
    },
    correctAnswer: 'B'
  },
  {
    id: 19,
    question: "Le putamen :",
    options: {
      A: "Est la partie médiale du noyau lenticulaire et elle est d'origine télencéphalique.",
      B: "Est la partie latérale du noyau lenticulaire et elle est d'origine diencéphalique.",
      C: "Est la partie latérale du noyau lenticulaire et elle est d'origine télencéphalique.",
      D: "Répond latéralement directement au claustrum.",
      E: "Répond latéralement directement à la capsule extrême."
    },
    correctAnswer: 'C'
  },
  {
    id: 20,
    question: "Le néencéphale est formé par :",
    options: {
      A: "Le diencéphale et le corps strié télencéphalique.",
      B: "Le diencéphale et le cortex cérébral.",
      C: "Uniquement du cortex.",
      D: "Le cortex cérébral et la substance blanche télencéphalique.",
      E: "Le cortex cérébral et la substance grise télencéphalique."
    },
    correctAnswer: 'D'
  },
  {
    id: 21,
    question: "Le muscle petit oblique de l'orbite :",
    options: {
      A: "Prend origine en dedans de l'orifice supérieur du canal lacrymo-nasal.",
      B: "Prend origine en dehors de l'orifice supérieur du canal lacrymo-nasal.",
      C: "Se termine au niveau de l'hémisphère antérieur du globe oculaire.",
      D: "Lorsque l'œil est en abduction, il est élévateur.",
      E: "Lorsque l'œil est en adduction, il est rotateur interne."
    },
    correctAnswer: 'B'
  },
  {
    id: 22,
    question: "Le deutoneurone des voies optiques s'étend :",
    options: {
      A: "de la rétine jusqu'au chiasma optique.",
      B: "de la rétine jusqu'au corps genouillé latéral.",
      C: "de la rétine jusqu'au corps genouillé médial.",
      D: "de la rétine jusqu'aux tubercules quadrijumeaux.",
      E: "de la rétine jusqu'au cortex occipital."
    },
    correctAnswer: 'B'
  },
  {
    id: 23,
    question: "La trompe d'Eustache s'étend :",
    options: {
      A: "de l'oropharynx a l'oreille interne.",
      B: "de l'oropharynx a l'oreille moyenne.",
      C: "du nasopharynx a l'oreille interne.",
      D: "du nasopharynx a l'oreille moyenne.",
      E: "de laryngopharynx a l'oreille moyenne."
    },
    correctAnswer: 'D'
  },
  {
    id: 24,
    question: "La fente sphénoïdale :",
    options: {
      A: "Fait partie des orifices de la fosse cérébrale antérieure.",
      B: "Permet le passage du nerf optique en plus des oculomoteurs.",
      C: "Permet le passage du nerf maxillaire en plus des oculomoteurs.",
      D: "Permet le passage du nerf mandibulaire en plus des oculomoteurs.",
      E: "Permet le passage du nerf ophtalmique de 'Willis' en plus des oculomoteurs."
    },
    correctAnswer: 'E'
  },
  {
    id: 25,
    question: "Quels types de fibres sont issues des récepteurs sensoriels superficiels tactiles ?",
    options: {
      A: "Fibres de type Ia.",
      B: "Fibres de type Ib.",
      C: "Fibres de type Aα.",
      D: "Fibres de type Aβ.",
      E: "Fibres de type Aγ."
    },
    correctAnswer: 'D'
  },
  {
    id: 26,
    question: "Quels récepteurs sont principalement responsables des réflexes myotatiques inverses ?",
    options: {
      A: "Les organes tendineux de Golgi.",
      B: "Les terminaisons secondaires des FNM.",
      C: "Les terminaisons primaires des FNM.",
      D: "Les fibres de type II.",
      E: "Les motoneurones γ."
    },
    correctAnswer: 'A'
  },
  {
    id: 27,
    question: "Le syndrome caractérisé par une atteinte transversale de l'hémi-moelle et abolition des sensibilités thermique et algique du côté opposé à la lésion est ?",
    options: {
      A: "Le syndrome de la commissure grise.",
      B: "Le syndrome des cordons postérieurs.",
      C: "La cordotomie antéro-latérale.",
      D: "Le syndrome de Brown-Séquard.",
      E: "La syringomyélie."
    },
    correctAnswer: 'D'
  },
  {
    id: 28,
    question: "Où se trouvent les relais des fibres du tact épicritique et de la sensibilité profonde consciente de la face ?",
    options: {
      A: "Dans les noyaux bulbaires Gracile et cunéiforme.",
      B: "Dans les noyaux olivaires supérieurs du tronc cérébral.",
      C: "Dans les noyaux thalamiques ventro-postéro-médians.",
      D: "Dans le cortex somesthésique non spécifique.",
      E: "Dans les noyaux thalamiques ventraux antérieur et latéral."
    },
    correctAnswer: 'C'
  },
  {
    id: 29,
    question: "Quel est le rôle des motoneurones γ dans le réflexe myotatique ?",
    options: {
      A: "Ils excitent les fibres musculaires extrafusoriales.",
      B: "Ils excitent les organes tendineux de Golgi correspondants.",
      C: "Ils inhibent les muscles fléchisseurs controlatéraux.",
      D: "Ils régulent l'activité des fuseaux neuromusculaires.",
      E: "Ils inhibent les réflexes myotatiques inverses."
    },
    correctAnswer: 'D'
  },
  {
    id: 30,
    question: "Le signe clinique de Babinski en faveur d'une atteinte pyramidale lors de l'exploration du réflexe plantaire est ?",
    options: {
      A: "Une flexion des orteils en brosse.",
      B: "Une contraction des muscles de la sangle abdominale.",
      C: "Une contraction du muscle crémastérien.",
      D: "Une extension des orteils en éventail.",
      E: "Une extension de la jambe par le muscle quadriceps."
    },
    correctAnswer: 'D'
  },
  {
    id: 31,
    question: "Quel mécanisme de régulation médullaire des réflexes spinaux implique l'inhibition des neurones antagonistes lors de l'activation des neurones agonistes ?",
    options: {
      A: "Inhibition récurrente.",
      B: "Réflexe myotatique inverse.",
      C: "Inhibition réciproque.",
      D: "Boucle gamma.",
      E: "Inhibition pré synaptique."
    },
    correctAnswer: 'C'
  },
  {
    id: 32,
    question: "Le myotome :",
    options: {
      A: "Est délimité par la section d'une racine rachidienne.",
      B: "Est un groupe de muscles innervés par un nerf.",
      C: "Est l'aire cutanée innervée par une racine dorsale.",
      D: "Est l'aire cutanée innervée par trois racines dorsales.",
      E: "Est un groupe de muscles antagonistes."
    },
    correctAnswer: 'B'
  },
  {
    id: 33,
    question: "Quel type de fibre est principalement impliqué dans la transmission des signaux du réflexe myotatique inverse ?",
    options: {
      A: "Fibres de type Ia.",
      B: "Fibres de type Ib.",
      C: "Fibres de type II.",
      D: "Fibres de type III.",
      E: "Fibres de type IV."
    },
    correctAnswer: 'B'
  },
  {
    id: 34,
    question: "Quel neurotransmetteur excite la cellule de Renshaw ?",
    options: {
      A: "Glycine.",
      B: "Glutamate.",
      C: "Acétylcholine.",
      D: "Dopamine.",
      E: "Noradrénaline."
    },
    correctAnswer: 'C'
  },
  {
    id: 35,
    question: "Dans un cycle, le pourcentage de sommeil lent chez un adulte est ?",
    options: {
      A: "10 à 15 %",
      B: "20 à 25 %",
      C: "30 à 35 %",
      D: "40 à 45 %",
      E: "70 à 75 %"
    },
    correctAnswer: 'E'
  },
  {
    id: 36,
    question: "Quel est le potentiel transmembranaire des photorécepteurs hyperpolarisés à la lumière ?",
    options: {
      A: "-70 mV",
      B: "-65 mV",
      C: "-50 mV",
      D: "-30 mV",
      E: "-10 mV"
    },
    correctAnswer: 'B'
  },
  {
    id: 37,
    question: "Le stade de sommeil qui est plus important en fin de nuit chez un adulte est ?",
    options: {
      A: "Sommeil paradoxal (SP).",
      B: "Sommeil lent léger (N1 et N2).",
      C: "Sommeil lent profond (N3).",
      D: "Sommeil calme.",
      E: "Sommeil agité."
    },
    correctAnswer: 'A'
  },
  {
    id: 38,
    question: "La durée moyenne d'un cycle de sommeil chez un adulte est ?",
    options: {
      A: "60 minutes.",
      B: "75 minutes.",
      C: "90 minutes.",
      D: "105 minutes.",
      E: "120 minutes."
    },
    correctAnswer: 'C'
  },
  {
    id: 39,
    question: "Lors d'un sommeil chez un adulte, on rencontre les pointes vertex pendant les deux stades :",
    options: {
      A: "N1 et N2",
      B: "N2 et N3",
      C: "N1 et N3",
      D: "N1 et Sommeil paradoxal (SP)",
      E: "N3 et Sommeil paradoxal (SP)"
    },
    correctAnswer: 'A'
  },
  {
    id: 40,
    question: "Au niveau de noyaux gris de la base, la voie qui agit sur les noyaux sous-thalamiques (NST) est :",
    options: {
      A: "Glutamatergique",
      B: "Dopaminergique",
      C: "Glycinergique",
      D: "Gabaergique",
      E: "Cholinergique"
    },
    correctAnswer: 'D'
  },
  {
    id: 41,
    question: "Les neurones olivo-cochléaires médians :",
    options: {
      A: "Assurent une innervation afférente issue des neurones de type II.",
      B: "Assurent une innervation afférente issue des neurones de type I.",
      C: "Contrôlent l'électromotricité des cellules ciliées externes.",
      D: "Inhibent les cellules ciliées internes par une voie glutamatergique.",
      E: "Protègent les cellules ciliées internes contre les traumatismes sonores."
    },
    correctAnswer: 'C'
  },
  {
    id: 42,
    question: "A propos de la neurobiologie du sommeil :",
    options: {
      A: "Le noyau pré-optique ventrolatéral active le sommeil paradoxal.",
      B: "Les neurones à hypocrétine déclenchent le sommeil lent.",
      C: "Les neurones cholinergiques activent l'éveil et le sommeil paradoxal.",
      D: "La substance réticulaire mésencéphalique ascendante active le sommeil paradoxal.",
      E: "Le locus coeruleus gabaergique déclenche le sommeil lent."
    },
    correctAnswer: 'C'
  },
  {
    id: 43,
    question: "Au niveau du photorécepteur :",
    options: {
      A: "La recoverine est liée au Na+ et assure un courant entrant à la lumière.",
      B: "L'arrestine empêche la rhodopsine activée d'activer la transducine à la lumière.",
      C: "La recoverine est liée au Ca++ et assure un courant dépolarisant à la lumière.",
      D: "L'arrestine est liée au Na+ et assure le courant hyperpolarisant à l'obscurité.",
      E: "L'opsine active la transducine (protéine G) pendant l'obscurité."
    },
    correctAnswer: 'B'
  },
  {
    id: 44,
    question: "Dans l'EEG, le rythme Alpha chez l'adulte :",
    options: {
      A: "Est désynchronisé par la lumière.",
      B: "A un rythme de 4 à 7 Hz ou c/s.",
      C: "Est appelé rythme « en dents de scie ».",
      D: "Est enregistré en antérieur du scalp.",
      E: "Est enregistré pendant le sommeil paradoxal."
    },
    correctAnswer: 'A'
  },
  {
    id: 45,
    question: "Dans un tracé PEA p (Potentiels Évoqués Auditifs précoces) normal, on a :",
    options: {
      A: "L'onde I est d'origine bulbaire.",
      B: "Le délai I-III est de 3 millisecondes.",
      C: "Le délai I-V est de 4 millisecondes.",
      D: "L'onde V a pour générateur le nerf cochléaire.",
      E: "Une latence cochléo-corticale."
    },
    correctAnswer: 'C'
  },
  {
    id: 46,
    question: "À quoi correspondent les lames fondamentales dans la moelle épinière ?",
    options: {
      A: "Zones sensitives.",
      B: "Zones motrices.",
      C: "Système nerveux végétatif.",
      D: "Cavités ventriculaires.",
      E: "Cellules de la crête neurale."
    },
    correctAnswer: 'B'
  },
  {
    id: 47,
    question: "Le diencéphale est à l'origine :",
    options: {
      A: "De l'épiphyse.",
      B: "Du bulbe rachidien.",
      C: "Des hémisphères cérébraux.",
      D: "Des pédoncules cérébraux.",
      E: "Des nerfs rachidiens."
    },
    correctAnswer: 'A'
  },
  {
    id: 48,
    question: "Sur une coupe longitudinale du ganglion rachidien, on retrouve :",
    options: {
      A: "Des fibres nerveuses efférentes dites préganglionnaires.",
      B: "Des fibres nerveuses exogènes qui relient le ganglion à la périphérie.",
      C: "Des neurones groupés en amas dans la zone centrale.",
      D: "Des neurones disposés au hasard dans la masse ganglionnaire.",
      E: "Des fibres nerveuses à disposition centrale."
    },
    correctAnswer: 'E'
  },
  {
    id: 49,
    question: "Quelles sont les fibres nerveuses qui font synapse au niveau du glomérule cérébelleux de Held ?",
    options: {
      A: "Fibres grimpantes, dendrites des grains, dendrites des cellules de Golgi type II.",
      B: "Fibres grimpantes, dendrites des grains, axones des cellules de Golgi type II.",
      C: "Fibres moussues, axones des grains du cervelet, axones des cellules de Golgi II.",
      D: "Fibres moussues, dendrites des grains, axones des cellules de Golgi type II.",
      E: "Fibres moussues, axones des grains du cervelet, dendrites des cellules de Golgi II."
    },
    correctAnswer: 'D'
  },
  {
    id: 50,
    question: "Quelles sont les deux types de neurones trouvés dans la couche granuleuse du cortex cérébelleux ?",
    options: {
      A: "Cellules pyramidales et cellules étoilées.",
      B: "Cellules de Purkinje et cellules à corbeille.",
      C: "Cellules de Golgi type II et grains du cervelet.",
      D: "Cellules étoilées superficielles et cellules de Martinotti.",
      E: "Cellules de Bergmann et cellules de Fanasnas."
    },
    correctAnswer: 'C'
  },
  {
    id: 51,
    question: "Quelle couche cérébrale est caractérisée par la présence des cellules de Martinotti ?",
    options: {
      A: "Couche moléculaire.",
      B: "Couche granulaire externe.",
      C: "Couche pyramidale interne.",
      D: "Couche polymorphe.",
      E: "Couche granulaire interne."
    },
    correctAnswer: 'E'
  },
  {
    id: 52,
    question: "Lors du développement embryonnaire, à quel moment les plexus choroïdes commencent-ils à se former ?",
    options: {
      A: "4 semaines de gestation.",
      B: "6 semaines de gestation.",
      C: "10 semaines de gestation.",
      D: "14 semaines de gestation.",
      E: "20 semaines de gestation."
    },
    correctAnswer: 'B'
  },
  {
    id: 53,
    question: "Le pôle apical de la cellule olfactive présente :",
    options: {
      A: "Des cils immobiles.",
      B: "De longs prolongements.",
      C: "Des stéréocils.",
      D: "Des microvillosités.",
      E: "De la cuticule."
    },
    correctAnswer: 'A'
  },
  {
    id: 54,
    question: "Quelle caractéristique morphologique est typique des cellules de soutien dans l'épithélium olfactif ?",
    options: {
      A: "Présence de cils olfactifs.",
      B: "Présence de pigments de lipofuscine.",
      C: "Axones longs amyéliniques.",
      D: "Cytoplasme riche en lipides.",
      E: "Noyaux volumineux."
    },
    correctAnswer: 'B'
  },
  {
    id: 55,
    question: "Parmi les propositions suivantes, quelle est celle qui ne convient pas à la description des bourgeons du goût ?",
    options: {
      A: "Ils renferment des cellules claires uniquement.",
      B: "Ils sont situés dans les papilles caliciformes.",
      C: "Ils présentent un aspect ovoïde.",
      D: "Ils sont formés de 3 types cellulaires.",
      E: "Ils présentent un pore gustatif."
    },
    correctAnswer: 'A'
  },
  {
    id: 56,
    question: "Les cytones des cellules à cônes de la rétine visuelle forment la couche :",
    options: {
      A: "Granulaire externe.",
      B: "Granulaire interne.",
      C: "Plexiforme externe.",
      D: "Limitante externe.",
      E: "Des cônes et des bâtonnets."
    },
    correctAnswer: 'A'
  },
  {
    id: 57,
    question: "Concernant les cellules ganglionnaires de la rétine :",
    options: {
      A: "Elles sont également appelées cellules de Muller.",
      B: "Leurs corps cellulaires se trouvent dans la couche granulaire externe.",
      C: "Leurs axones forment les fibres du nerf optique.",
      D: "Leurs dendrites se ramifient dans la couche plexiforme externe.",
      E: "Elles s'articulent avec plusieurs cellules bipolaires dans la fovéa centralis."
    },
    correctAnswer: 'C'
  },
  {
    id: 58,
    question: "Les constituants de l'organe de Corti reposent sur la :",
    options: {
      A: "Membrane tectoria.",
      B: "Strie vasculaire.",
      C: "Membrane de Reissner.",
      D: "Lame des contours.",
      E: "Membrane basilaire."
    },
    correctAnswer: 'E'
  },
  {
    id: 59,
    question: "La structure en microscopie optique d'une ampoule diffère de celle d'une macule par :",
    options: {
      A: "Des cellules de soutien.",
      B: "Des cellules sensorielles de type I et II.",
      C: "Des terminaisons nerveuses afférentes.",
      D: "Des terminaisons nerveuses efférentes.",
      E: "Une cupule sans otolithes."
    },
    correctAnswer: 'E'
  },
  {
    id: 60,
    question: "Dans le domaine des sons audibles, la loi de Weber stipule que le seuil différentiel relatif Δf/f est constant pour les fréquences qui varient entre :",
    options: {
      A: "20 et 100 Hz",
      B: "500 et 8000 Hz",
      C: "200 et 400 Hz",
      D: "9000 et 12000 Hz",
      E: "15000 et 20000 Hz"
    },
    correctAnswer: 'B'
  },
  {
    id: 61,
    question: "Les sons partiels sont des sons :",
    options: {
      A: "Supérieurs à 20 kHz",
      B: "Inférieurs à 20 Hz",
      C: "Inférieurs à la fréquence d'un son fondamental",
      D: "Purs dont la fréquence n'est pas un multiple entier de la fréquence v",
      E: "Purs dont la fréquence est un multiple entier de la fréquence v"
    },
    correctAnswer: 'D'
  },
  {
    id: 62,
    question: "Concernant le phénomène de diffraction du son par un obstacle :",
    options: {
      A: "L'obstacle va se comporter comme une source secondaire.",
      B: "La diffraction est importante quand la fréquence est élevée.",
      C: "Le son ne peut pas contourner les obstacles.",
      D: "La diffraction est importante quand la fréquence est basse.",
      E: "La largeur de l'obstacle doit être supérieure à la longueur d'onde du son."
    },
    correctAnswer: 'D'
  },
  {
    id: 63,
    question: "Concernant les caractéristiques physiques d'une onde sonore :",
    options: {
      A: "La fréquence d'une onde varie tout au long du milieu traversé.",
      B: "La célérité d'une onde sonore dépend du milieu traversé.",
      C: "La longueur d'onde ne varie pas en fonction du milieu.",
      D: "L'équation de vibration d'un son pur est x = A sin(2Πωt). A : amplitude, ω : pulsation, t : temps.",
      E: "La longueur d'onde λ d'un son est liée à sa fréquence par : λ = c.F (c : célérité ; F : fréquence)."
    },
    correctAnswer: 'B'
  },
  {
    id: 64,
    question: "Quel est le niveau sonore obtenu par la superposition de 2 sons de -1 dB chacun ?",
    options: {
      A: "-2 dB",
      B: "0 dB",
      C: "+ 1 dB",
      D: "+ 3 dB",
      E: "+ 2 dB"
    },
    correctAnswer: 'E'
  },
  {
    id: 65,
    question: "En Audiométrie tonale liminaire :",
    options: {
      A: "On recherche les seuils auditifs pour chaque oreille, à différentes fréquences, en conduction osseuse seulement.",
      B: "Les seuils sont reportés sur un graphique appelé magnétogramme.",
      C: "On recherche les seuils auditifs pour une seule oreille, à une seule fréquence, en conduction aérienne et osseuse.",
      D: "La conduction osseuse évalue les performances de l'oreille externe.",
      E: "On recherche les seuils auditifs pour chaque oreille, à différentes fréquences, en conduction osseuse et aérienne."
    },
    correctAnswer: 'E'
  },
  {
    id: 66,
    question: "Dans les Dichromatopsies, un sujet deutéranope ne perçoit pas la couleur :",
    options: {
      A: "Verte",
      B: "Rouge",
      C: "Bleu",
      D: "Jaune",
      E: "Magenta"
    },
    correctAnswer: 'A'
  },
  {
    id: 67,
    question: "L'utilisation de l'ophtalmomètre de JAVAL a pour but :",
    options: {
      A: "D'apprécier l'ordre de grandeur du degré de la presbytie",
      B: "D'explorer l'acuité visuelle",
      C: "De tester les capacités d'accommodation",
      D: "De vérifier si les rayons de courbure de la cornée sont identiques dans tous les plans",
      E: "De réaliser un examen du fond d'œil"
    },
    correctAnswer: 'D'
  },
  {
    id: 68,
    question: "L'éclairement lumineux s'exprime en :",
    options: {
      A: "Watt",
      B: "Lux",
      C: "Lumen",
      D: "Candela",
      E: "Watt.sr^-1"
    },
    correctAnswer: 'B'
  },
  {
    id: 69,
    question: "La tomographie à cohérence optique (OCT) est un examen qui :",
    options: {
      A: "Utilise les ultrasons",
      B: "Utilise une lumière ultraviolette.",
      C: "Est invasif",
      D: "Permet d'obtenir une coupe de la macula",
      E: "Est basé sur le principe de l'interférométrie."
    },
    correctAnswer: 'D'
  },
  {
    id: 70,
    question: "Parmi les propositions suivantes, cochez celle qui ne fait pas partie des amétropies :",
    options: {
      A: "L'astigmatisme myopique composé",
      B: "La myopie",
      C: "L'hypermétropie",
      D: "La diplopie",
      E: "L'astigmatisme mixte."
    },
    correctAnswer: 'D'
  }
];
