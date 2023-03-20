/**
 * App main lang file
 *
 * @type {{languages: {en: {pages: {irida: {footerMenu: string, navbar: *, reservations: *, main: string, facilities_title: string, footerAddress: string, facilities: *, title: string, findus: *, gallery: string}, contact: {footerMenu: string, navbar: *, reservations: *, form: {errorMessages: {minlength10: string, validEmail: string, minlength3: string, minlength5: string, required: string}}, submit: string, main: string, footerAddress: string, title: string, findus: *}, location: {mpelaVraka: string, gallikosMolos: string, zavia: string, megaNtrafi: string, dei: string, main: string, agiaParaskevi: string, arrilas: string, title: string, mikriAmmos: string, karavostasi: string, footerMenu: string, navbar: *, reservations: *, beachTitle: string, galleryDescriptions: {mpelaVraka: string, gallikosMolos: string, mikriAmmos: string, zavia: string, karavostasi: string, megaNtrafi: string, dei: string, agiaParaskevi: string, zeri: string, megaAmmos: string, arrilas: string, pisina: string}, zeri: string, megaAmmos: string, footerAddress: string, findus: *, pisina: string}, kimon: {footerMenu: string, navbar: *, reservations: *, main: string, facilities_title: string, footerAddress: string, facilities: *, title: string, findus: *, gallery: string}, home: {iridaTitle: string, kimonSubTitle: string, footerMenu: string, navbar: *, reservations: *, kimonTitle: string, footerAddress: string, readMore: string, welcome: string, findus: *, iridaSubTitle: string}}}, gr: {pages: {irida: {footerMenu: string, navbar: *, reservations: *, main: string, facilities_title: string, footerAddress: string, facilities: *, title: string, findus: *, gallery: string}, contact: {footerMenu: string, navbar: *, reservations: *, form: {errorMessages: {minlength10: string, validEmail: string, minlength3: string, minlength5: string, required: string}}, submit: string, main: string, footerAddress: string, title: string, findus: *}, location: {mpelaVraka: string, gallikosMolos: string, zavia: string, megaNtrafi: string, dei: string, main: string, agiaParaskevi: string, arrilas: string, title: string, mikriAmmos: string, karavostasi: string, footerMenu: string, navbar: *, reservations: *, beachTitle: string, galleryDescriptions: {mpelaVraka: string, gallikosMolos: string, mikriAmmos: string, zavia: string, karavostasi: string, megaNtrafi: string, dei: string, agiaParaskevi: string, zeri: string, megaAmmos: string, arrilas: string, pisina: string}, zeri: string, megaAmmos: string, footerAddress: string, findus: *, pisina: string}, kimon: {footerMenu: string, navbar: *, reservations: *, main: string, facilities_title: string, footerAddress: string, facilities: *, title: string, findus: *, gallery: string}, home: {iridaTitle: string, kimonSubTitle: string, footerMenu: string, navbar: *, reservations: *, kimonTitle: string, footerAddress: string, readMore: string, welcome: string, findus: *, iridaSubTitle: string}}}}}}
 */
App.langData = {
    languages: {
        en: {
            pages: {
                home: {
                    navbar: App.navbar_lang.en,
                    reservations: App.header_bottom_lang.en.reservations,
                    findus: App.header_bottom_lang.en.findus,
                    welcome: 'Welcome to Marinos-aparts Rooms in Sivota, where your ultimate satisfaction is our only goal. ' +
                        'Marinos-aparts, with 30 years of hospitality, consist of 2 separate accommodation, Kimon Resort and Irida Resort.' +
                        ' We make sure that all our customers find exactly what suits them for their vacation. So we have single ' +
                        'and double room apartments, ideal for couples and families, in the center of the port but also a little further, ' +
                        'on the floor or on the ground floor.All of our apartments are spacious and fully refurbished, with stylish ' +
                        'furnishings and a private balcony. Feel free to contact us to discuss what is ideal for you to ensure you the most beautiful ' +
                        'and easy vacation in Sivota.',
                    kimonTitle: 'Completely refurbished, Kimon Resort is set in an idyllic setting amidst olive groves, ' +
                        'offering tranquility and beauty to holidaymakers.',
                    iridaTitle: 'Completely refurbished and located only 30 meters from the port, Irida Resort is ideal for vacationers who want to enjoy ' +
                        'the life of Sivota.',
                    kimonSubTitle: 'Only 200 meters from the port and 200 meters from the beach of French Molos, Kimon Resort is ideal ' +
                        'for anyone wishing to stay in a quiet accommodation but at the same time not be deprived of the opportunity to leave the car ' +
                        'and do everything on foot.',
                    iridaSubTitle: 'The studios, all on the first floor of the property, offer moments of relaxation and total peace of mind. ' +
                        'Spacious, bright, cool, with elegant décor and private balconies, they feature the entire package and cater to all holiday needs.',
                    readMore: 'Read More',
                    footerMenu: 'Menu',
                    footerAddress: 'Sivota, Thesprotia',
                    footerRegistryNo: 'KIMON General Registry Number 019630328004 | IRIDA General Registry Number 019630328000'
                },
                kimon: {
                    navbar: App.navbar_lang.en,
                    reservations: App.header_bottom_lang.en.reservations,
                    findus: App.header_bottom_lang.en.findus,
                    main: 'Completely renovated, Kimon Resort is set in an idyllic location, surrounded by olive groves, ' +
                        'offering tranquility and beauty to holidaymakers. Only 200 meters from the port and 200 meters from the ' +
                        'beach of French Molos, Kimon Resort is ideal for anyone wants to stay in a quiet accommodation but at the ' +
                        'same time is not deprived of the ability to leave the car and do everything on foot. It is an elegant two-storey ' +
                        'building with ten studios and a beautiful stone-built communal courtyard, ideal for children and an afternoon coffee. ' +
                        'The studios are spacious, renovated and all have air conditioning, a fully equipped kitchen, a bathroom and a private balcony. ' +
                        'Furthermore, our private covered parking lot right opposite the property helps you to walk on foot without any worry about your car. ' +
                        'At Kimon Resort, even the most demanding vacationer will feel good and enjoy his vacation.',
                    facilities_title: 'Facilities',
                    facilities: App.facilities_lang.en,
                    gallery: 'Gallery',
                    title: 'Kimon Resort',
                    footerMenu: 'Menu',
                    footerAddress: 'Sivota, Thesprotia',
                    footerRegistryNo: 'KIMON General Registry Number 019630328004 | IRIDA General Registry Number 019630328000'
                },
                irida: {
                    navbar: App.navbar_lang.en,
                    reservations: App.header_bottom_lang.en.reservations,
                    findus: App.header_bottom_lang.en.findus,
                    main: 'Irida Resort is completely renovated and ideally located in the center of the village. ' +
                        'Located 30 meters from the port, it is ideal for vacationers who want to enjoy the life of Sivota. ' +
                        ' At the same time it is only 200 meters from the beach of French Molos, giving you the opportunity to ' +
                        'enjoy your swim without your car. The studios, all on the first floor of the property, offer moments ' +
                        'of relaxation and total peace of mind. Spacious, bright, cool, with elegant décor and private balconies, ' +
                        'they feature the entire package and cater to all holiday needs. A fully equipped kitchen and a renovated ' +
                        'private bathroom will meet your needs, while the balconies will give you the opportunity to enjoy your coffee. ' +
                        'The rooms of Irida Resort offer comfort, luxury and easy access to the center of Sivota and ' +
                        'the beach at very affordable prices.',
                    facilities_title: 'Facilities',
                    facilities: App.facilities_lang.en,
                    gallery: 'Gallery',
                    title: 'Irida Resort',
                    footerMenu: 'Menu',
                    footerAddress: 'Sivota, Thesprotia',
                    footerRegistryNo: 'KIMON General Registry Number 019630328004 | IRIDA General Registry Number 019630328000'
                },
                location: {
                    navbar: App.navbar_lang.en,
                    reservations: App.header_bottom_lang.en.reservations,
                    findus: App.header_bottom_lang.en.findus,
                    title: 'Sivota',
                    main: 'Sivota is a special destination, as one of the most picturesque villages of Epirus. ' +
                        'It is an ideal combination of blue and green as the hills are joined with the crystal waters of ' +
                        'the Ionian Sea. The village of Sivota has a unique cluster of islands with the names "Mavro Oros", ' +
                        '"Ag. Nikolaos" and "Mourtemeno", which consist of beaches and small bays that stand out for their diversity. ' +
                        'The location of Sivota is also ideal for excursions to surrounding areas. In a very close distance (just 25km) ' +
                        'is the town of Igoumenitsa, which is the capital of the prefecture and the largest tourist resort in the area. ' +
                        'There exists also the namesake port, from where you can organize trips to the islands of Corfu, Ithaca and Paxos. ' +
                        'Within 60 km there is the international airport of Aktion with flights to and from European countries. Also just in a ' +
                        'short distance you will find the Egnatia Highway, connecting the area with Northern Greece. Sivota is a region ' +
                        'with countless activities for every taste and demand of the people who choose to spend their vacation in Sivota. ' +
                        'The beautiful and clean beaches (Mikri and Megali Ammos, Pisina, Gallikos, Molos, Zavia, Mega Trafos, Zeri, DEI, Agia Raraskevi), ' +
                        'are beaches that meet all your needs and requirements. The well-organised harbor and the excellent tourist ' +
                        'infrastructures attract Greek and foreign tourists, offering them numerous of leisure options such as diving, sailing and trips.',
                    beachTitle: 'Beaches',
                    agiaParaskevi: 'Agia Paraskevi',
                    zeri: 'Zeri',
                    zavia: 'Zavia',
                    dei: 'Dei',
                    megaNtrafi: 'Mega Ntrafi',
                    mpelaVraka: 'Mpela Vraka',
                    gallikosMolos: 'Gallikos Molos',
                    megaAmmos: 'Mega Ammos',
                    mikriAmmos: 'Mikri Ammos',
                    pisina: 'Pisina',
                    karavostasi: 'Karavostasi',
                    arrilas: 'Arrilas',
                    galleryDescriptions: {
                        agiaParaskevi: '<h5>Agia Paraskevi</h5>It is next to Mega Trafos beach and I must point out that ' +
                            'it belongs to the village of Perdika. The sea is warm and has something exotic. There is a small ' +
                            'island just a short walk from the beach.',
                        zeri: '<h5>Zeri</h5>The beach is just after the French sand, the waters are warm and you can ' +
                            'sit down for lunch or coffee. There are also water slides for the little ones at the party.',
                        zavia: '<h5>Zavia</h5>Zavia is outside the village headed for the village of Perdika. The sea ' +
                            'there is quite cool. It\'s organized. You will find food - bar.',
                        dei: '<h5>Dei</h5>We leave the center of the village. The beach has pebbles and is quite calm. ' +
                            'The sea is also warm and you can enjoy the view of Ag. Nicholas. At the moment (17/08/2009) the ' +
                            'store that offered coolness and something to eat remained closed. ' +
                            'As it was not accessible by car to the beach.',
                        megaNtrafi: '<h5>Mega Ntrafi</h5>Departing from Mikri Ammos to Perdika you will find Mega Drafi ' +
                            'beach. You should leave the car high on the road. The beach has sand and pebbles. There is a ' +
                            'canteen that offers you the basics. It is well organized and the cost of a ' +
                            'sunbed umbrella reaches 5 euros (price 17/08/2009).',
                        mpelaVraka: '<h5>Mpela Vraka</h5>Incredible beach !!! You should definitely visit it. The beach ' +
                            'is located on the island of Mourtenom. You pass the island crossing the sea on foot where the ' +
                            'water reaches your knees. You will not find anything to eat but no soft drinks ' +
                            'so before you get the supplies you need.',
                        gallikosMolos: '<h5>Gallikos Molos</h5>It is very close to the center of the village. The beach ' +
                            'is sandy and has a shop where you can sit and enjoy coffee and snack. The sea is generally warm.',
                        megaAmmos: '<h5>Mega Ammos</h5>It is outside the village heading to Perdika. It is the in beach of ' +
                            'Sivota with many cafe - bar restaurants. As for the beach it is well organized. ' +
                            'It should also be known that the water is cool and pebbly.',
                        mikriAmmos: '<h5>Mikri Ammos</h5>Immediately after Mega Ammos is Mikri Ammos where you will' +
                            'find food and a bar. It\'s organized.',
                        pisina: '<h5>Pisina</h5>The name says it all! It is located on the island of Agios Nikolaos. ' +
                            'Access is by boat only. The sea is quite cool but these waters will remain unforgettable!',
                        karavostasi: '<h5>Karavostasi</h5>Karavostasi beach is a very large organized beach with white sand ' +
                            'and blue waters. It has an amazing landscape where you can relax while enjoying your coffee or eating. ' +
                            'You can also rent canoes, water bicycles, etc. for your enjoyment on the water etc. Finally, your access to ' +
                            'the beach is easy and definitely has plenty of space to park.',
                        arrilas: '<h5>Arrilas</h5>Secure organized beach with fine sand and crystal clear waters. It is ideal and ' +
                            'preferable for families with children as it is particularly shallow. Clearly easy to reach the beach is ' +
                            'very accessible and has parking space. Finally you can rent a boat to visit the nearby beaches.',
                    },
                    footerMenu: 'Menu',
                    footerAddress: 'Sivota, Thesprotia',
                    footerRegistryNo: 'KIMON General Registry Number 019630328004 | IRIDA General Registry Number 019630328000'
                },
                'contact': {
                    navbar: App.navbar_lang.en,
                    reservations: App.header_bottom_lang.en.reservations,
                    findus: App.header_bottom_lang.en.findus,
                    title: 'Contact Form',
                    main: 'Check for availability. We will contact you as soon as possible.',
                    form: {
                        errorMessages: {
                            required: 'This field is required',
                            validEmail: 'Please enter a valid email address',
                            minlength10: 'Please enter at least 10 characters',
                            minlength5: 'Please enter at least 5 characters',
                            minlength3: 'Please enter at least 3 characters',
                        },
                    },
                    contactErrorMessage: 'Unable to send',
                    contactSuccessMessage: 'Thanks for contacting us',
                    captchaErrorMessage: 'Captcha field is required',
                    submit: 'Submit',
                    footerMenu: 'Menu',
                    footerAddress: 'Sivota, Thesprotia',
                    footerRegistryNo: 'KIMON General Registry Number 019630328004 | IRIDA General Registry Number 019630328000'
                },
            },
        }
        , gr: {
            pages: {
                home: {
                    navbar: App.navbar_lang.gr,
                    reservations: App.header_bottom_lang.gr.reservations,
                    findus: App.header_bottom_lang.gr.findus,
                    welcome: 'Καλωσορίσατε στα ενοικιαζόμενα δωμάτια Marinos-aparts, στα Σύβοτα, όπου η απόλυτη ικανοποίηση ' +
                        'σας είναι ο μόνος στόχος μας. Τα Marinos-aparts, με 30 χρόνια παρουσίας στον χώρο της φιλοξενίας, αποτελούνται ' +
                        'από 2 ξεχωριστά καταλύματα, το Kimon Resort και το Irida Resort. Έχουμε φροντίσει ώστε όλοι οι πελάτες μας να βρουν ' +
                        'ακριβώς αυτό που τους ταιριάζει για τις διακοπές τους. Διαθέτουμε λοιπόν μονόχωρα αλλά και δίχωρα διαμερίσματα, ' +
                        'ιδανικά για ζευγάρια αλλά και οικογένειες, στο κέντρο του λιμανιού αλλά και λίγο πιο δίπλα, σε όροφο ή σε ισόγειο. ' +
                        'Όλα τα διαμερίσματα μας είναι ευρύχωρα και πλήρως ανακαινισμένα, διαθέτουν καλαίσθητη επίπλωση και ιδιωτικό μπαλκόνι. ' +
                        'Μην διστάσετε να επικοινωνήσετε μαζί μας για να συζητήσουμε ποιό είναι το ιδανικό για εσάς για να σας εξασφαλίσουμε ' +
                        'τις πιο όμορφες και εύκολες διακοπές στα Σύβοτα.',
                    kimonTitle: 'To πλήρως ανακαινισμένο Kimon Resort, βρίσκεται σε μια ειδυλλιακή τοποθεσία, ανάμεσα σε ' +
                        'ελαιώνες και προσφέρει ησυχία και ομορφιά στους παραθεριστές.',
                    iridaTitle: 'Το πλήρως ανακαινισμένο Irida Resort, βρίσκεται σε ιδανική τοποθεσία, στο κέντρο του χωριού. Στα 30 μέτρα από το λιμάνι, ' +
                        'είναι ιδανικό για παραθεριστές που θέλουν να απολαύσουν την ζωή των Συβότων.',
                    kimonSubTitle: 'Απέχοντας μόνο 200 μέτρα μόνο από το λιμάνι και 200 μέτρα από την παραλία Γαλλικός Μώλος, το Kimon Resort ' +
                        'είναι ιδανικό για όποιον θέλει να μένει σε ένα ήσυχο κατάλυμα αλλά ταυτόχρονα να μη του στερείται η δυνατότητα να αφήσει το ' +
                        'αυτοκίνητο και να κάνει τα πάντα πεζός.',
                    iridaSubTitle: 'Tα studios, όλα στον πρώτο όροφο του οικήματος, προσφέρουν στιγμές χαλάρωσης και απόλυτης ηρεμίας. Ευρύχωρα, φωτεινά, ' +
                        'δροσερά, με φινετσάτη διακόσμηση και ιδιωτικά μπαλκόνια, διαθέτουν όλο το πακέτο και καλύπτουν όλες τις ανάγκες του παραθεριστή. ',
                    readMore: 'Περισσότερα',
                    footerMenu: 'Μενού',
                    footerAddress: 'Σύβοτα, Θεσπρωτία',
                    footerRegistryNo: 'KIMON Αριθμός ΓΕΜΗ 019630328004 | IRIDA Αριθμός ΓΕΜΗ 019630328000'
                },
                kimon: {
                    navbar: App.navbar_lang.gr,
                    reservations: App.header_bottom_lang.gr.reservations,
                    findus: App.header_bottom_lang.gr.findus,
                    main: 'To πλήρως ανακαινισμένο Kimon Resort, βρίσκεται σε μια ειδυλλιακή τοποθεσία, ανάμεσα ' +
                        'σε ελαιώνες και προσφέρει ησυχία και ομορφιά στους παραθεριστές.' +
                        ' Απέχοντας μόνο 200 μέτρα μόνο από το λιμάνι και 200 μέτρα από την παραλία Γαλλικός Μώλος, ' +
                        'το Kimon Resort είναι ιδανικό για όποιον θέλει να μένει σε ένα ήσυχο κατάλυμα αλλά  ταυτόχρονα να ' +
                        'μη του στερείται η δυνατότητα να αφήσει το αυτοκίνητο και να κάνει τα πάντα πεζός. Πρόκειται για ένα ' +
                        'καλαίσθητο διώροφο κτίριο, που διαθέτει δέκα studios και μια πανέμορφη πετρόκτιση κοινόχρηστη αυλή, ' +
                        'ιδανική για παιδιά αλλά και έναν απογευματινό καφέ. Τα studios είναι ευρύχωρα, ανακαινισμένα και ' +
                        'διαθέτουν όλα τους κλιματισμό, πλήρως εξοπλισμένη κουζίνα, μπάνιο και ιδιωτικό μπαλκόνι. ' +
                        'Ακόμη, το ιδιωτικό μας parking με σκέπαστρο, ακριβώς απέναντι από το κατάλυμα, σας βοηθάει στο να ' +
                        'κινείστε πεζοί δίχως καμμία έγνοια για το αυτοκίνητό σας. Στο Kimon Resort, ακόμα και ο πιο απαιτητικός ' +
                        'παραθεριστής θα νιώσει όμορφα και θα απολαύσει τις διακοπές του.',
                    facilities_title: 'Παροχές',
                    facilities: App.facilities_lang.gr,
                    gallery: 'Φωτογραφίες',
                    title: 'Kimon Resort',
                    footerMenu: 'Μενού',
                    footerAddress: 'Σύβοτα, Θεσπρωτία',
                    footerRegistryNo: 'KIMON Αριθμός ΓΕΜΗ 019630328004 | IRIDA Αριθμός ΓΕΜΗ 019630328000'
                },
                irida: {
                    navbar: App.navbar_lang.gr,
                    reservations: App.header_bottom_lang.gr.reservations,
                    findus: App.header_bottom_lang.gr.findus,
                    main: 'Το πλήρως ανακαινισμένο Irida Resort, βρίσκεται σε ιδανική τοποθεσία, στο κέντρο του χωριού. ' +
                        'Στα 30 μέτρα από το λιμάνι, είναι ιδανικό για παραθεριστές που θέλουν να απολαύσουν την ζωή των Συβότων. ' +
                        'Ταυτόχρονα απέχει μόνο 200 μέτρα από την παραλία Γαλλικός Μώλος, προσφέροντάς σας τη δυνατότητα να απολαύσετε ' +
                        'το μπάνιο σας χωρίς το αυτοκίνητό σας. Tα studios, όλα στον πρώτο όροφο του οικήματος, προσφέρουν στιγμές ' +
                        'χαλάρωσης και απόλυτης ηρεμίας. Ευρύχωρα, φωτεινά, δροσερά, με φινετσάτη διακόσμηση και ιδιωτικά μπαλκόνια, ' +
                        'διαθέτουν όλο το πακέτο και καλύπτουν όλες τις ανάγκες του παραθεριστή. Μία πλήρως εξοπλισμένη κουζίνα και ' +
                        'ένα ανακαινισμένο ατομικό μπάνιο θα ικανοποιήσουν τις ανάγκες σας, ενώ τα μπαλκόνια θα σας προσφέρουν ' +
                        'την ευκαιρία να απολαύσετε τον καφέ σας. Τα δωμάτια του Irida Resort προσφέρουν άνεση, πολυτέλεια και ' +
                        'εύκολη πρόσβαση στο κέντρο των Συβότων και στην παραλία σε πολύ προσιτές τιμές.',
                    facilities_title: 'Παροχές',
                    facilities: App.facilities_lang.gr,
                    gallery: 'Φωτογραφίες',
                    title: 'Irida Resort',
                    footerMenu: 'Μενού',
                    footerAddress: 'Σύβοτα, Θεσπρωτία',
                    footerRegistryNo: 'KIMON Αριθμός ΓΕΜΗ 019630328004 | IRIDA Αριθμός ΓΕΜΗ 019630328000'
                },
                location: {
                    navbar: App.navbar_lang.gr,
                    reservations: App.header_bottom_lang.gr.reservations,
                    findus: App.header_bottom_lang.gr.findus,
                    title: 'Σύβοτα',
                    main:
                        'Τα Σύβοτα αποτελούν ένα ιδιαίτερο προορισμό, ως ένα από τα γραφικότερα χωριά της Ηπείρου. Πρόκειται ' +
                        'για ιδανικό συνδυασμό γαλάζιου και πράσινου, καθώς οι λόφοι ενώνονται με τα κρυστάλλινα νερά του ιονίου. ' +
                        'Το χωριό των Συβότων διαθέτει ένα μοναδικό σύμπλεγμα νησίδων με τις ονομασίες ‘’Μαύρο Όρος’’, ' +
                        '‘’Αγ. Νικόλαος’’, και ‘’Μουρτεμένο’’, τα οποία αποτελούνται από ακρογιαλιές και μικρούς κολπίσκους που' +
                        ' ξεχωρίζουν για την διαφορετικότητα τους.Η τοποθεσία που βρίσκονται τα Σύβοτα είναι επίσης ιδανική για ' +
                        'εξορμήσεις στις γύρω περιοχές. Σε πολύ κοντινή απόσταση (μόλις 25km) βρίσκεται η πόλη της Ηγουμενίτσας, ' +
                        'η οποία αποτελεί και πρωτεύουσα του νομού καθώς και το μεγαλύτερο τουριστικό θέρετρο της περιοχής. Εκεί ' +
                        'υπάρχει και το ομώνυμο λιμάνι, από όπου μπορείτε να οργανώσετε εκδρομές προς τα νησιά της Κέρκυρας, της Ιθάκης και τους Παξούς.' +
                        'Σε απόσταση 60km υπάρχει το διεθνές αεροδρόμιο Ακτίου με πτήσεις από και προς χώρες της Ευρώπης. ' +
                        'Επίσης σε κοντινή απόσταση βρίσκεται και η Εγνατία Οδός, συνδέοντας έτσι την περιοχή με τη Βόρεια Ελλάδα.' +
                        'Πρόκειται για μια περιοχή με αμέτρητες δραστηριότητες για όλα τα γούστα και τις απαιτήσεις των ανθρώπων ' +
                        'που επιλέγουν να περάσουν τις διακοπές τους στα Σύβοτα. Οι πανέμορφες και πεντακάθαρες παραλίες ' +
                        '(Μικρή και Μεγάλη Άμμος, Πισίνα, Γαλλικός, Μώλος, Ζάβια, Μέγα Tράφος, Ζέρη, Δ.Ε.Η., Αγία Παρασκευή), ' +
                        'είναι παραλίες οι οποίες καλύπτουν τις ανάγκες και τις απαιτήσεις όλων.' +
                        'Το οργανωμένο λιμανάκι για τα σκάφη και οι άριστες τουριστικές υποδομές προσελκύουν Έλληνες και ' +
                        'ξένους τουρίστες, προσφέροντας πολλές επιλογές αναψυχής, όπως καταδύσεις, ιστιοπλοΐα και εκδρομές.',
                    beachTitle: 'Παραλίες',
                    agiaParaskevi: 'Αγία Παρασκευή',
                    zeri: 'Ζέρη',
                    zavia: 'Ζάβια',
                    dei: 'Δεή',
                    megaNtrafi: 'Μέγα Ντράφι',
                    mpelaVraka: 'Μπέλα Βράκα',
                    gallikosMolos: 'Γαλλικός Μώλος',
                    megaAmmos: 'Μέγα Άμμος',
                    mikriAmmos: 'Μικρή Άμμος',
                    pisina: 'Πισίνα',
                    karavostasi: 'Καραβοστάσι',
                    arrilas: 'Αρρίλας',
                    galleryDescriptions: {
                        agiaParaskevi: '<h5>Αγία Παρασκευή</h5>Είναι μετά την παραλία Μέγα Τράφο και πρέπει να επισημάνω ότι ανήκει στο χωριό Πέρδικα.' +
                            '                       Η θάλασσα είναι ζεστή και έχει κάτι το εξωτικό. Υπάρχει ένα μικρό νησί το οποίο βρίσκεται σε πολύ' +
                            '                       μικρή απόσταση από την παραλία.',
                        zeri: '<h5>Ζέρη</h5>Είναι αμέσως μετά τον Γαλλικό η παραλία έχει άμμο, τα νερά είναι ζεστά και' +
                            '                        έχετε την δυνατότητα να κάτσετε για φαγητό ή καφέ. Επίσης υπάρχουν και νεροτσουλήθρες για τους' +
                            '                        μικρούς μεγέλους της παρέας.',
                        zavia: '<h5>Ζάβια</h5>Η Ζάβια είναι εκτός χωριού με κατεύθυνση το χωριό πέρδικα. Η θάλασσα εκεί είναι' +
                            '                       αρκετά δροσερή. Είναι οργανωμένη. Θα βρείτε φαγητό - bar.',
                        dei: '<h5>Δεή</h5>Απομακρυνόμαστε από το κέντρο του χωριού. Η παραλία έχει βοτσαλάκια έχει αρκετή ηρεμία.' +
                            '                       Η θάλασσα είναι επίσης ζεστή και μπορείτε να απολαύσετε την θέα του Νησιού Αγ. Νικόλαος. Αυτήν την στιγμή' +
                            '                       (17/08/2009) το μαγαζί που πρόσφερε δροσιά και το κάτι της για φαγητό παρέμεινε κλειστό. Καθώς και η πρόσβαση' +
                            '                       δεν ήταν εφικτή με αυτοκίνητο μέχρι την παραλία.',
                        megaNtrafi: '<h5>Μέγα Ντράφι</h5>Φεύγοντας και από την Μικρή Άμμο με κατεύθυνση την Πέρδικα θα βρείτε την παραλία Μέγα Τράφο.' +
                            '                       Το αυτοκίνητο θα πρέπει να το αφήσετε στον δρόμο ψηλά. Η παραλία έχει άμμο και βότσαλα. Υπάρχει μια καντίνα' +
                            '                       που σας προσφέρει τα βασικά. Είναι και οργανωμένη και το κόστος ομπρέλας ξαπλώστρας αγγίζει τα 5 ευρώ (τιμή 17/08/2009).',
                        mpelaVraka: '<h5>Μπέλα Βράκα</h5>Απίστευτη παραλία!!! Πρέπει οπωσδήποτε να την επισκεφτείτε. Η παραλία βρίσκεται στην' +
                            '                       ουσία στο νησάκι Μουρτεμένο. Περνάτε στο νησί διασχίζοντας την θάλασσα με τα πόδια όπου το νερό φτάνει' +
                            '                       μέχρι το γόνατο. Δεν θα βρείτε κάτι για φαγητό αλλά ούτε και κάποιο αναψυκτήριο γι αυτό πριν' +
                            '                       πάτε εφοδιασθείτε με τα απαραίτητα.',
                        gallikosMolos: '<h5>Γαλλικός Μώλος</h5>Βρίσκεται πολύ κοντά στο κέντρο του χωριού. Η παραλία έχει άμμο και διαθέτει μαγαζί' +
                            '                       όπου μπορείτε να κάτσετε να απολαύσετε τον καφέ και να τσιμπήσετε και κάτι.' +
                            '                       Η θάλασσα είναι γενικά ζεστή.',
                        megaAmmos: '<h5>Μέγα Άμμος</h5>Είναι έξω από το χωριό με κατεύθυνση προς την Πέρδικα. Είναι η in παραλία των Συβότων' +
                            '                       με πολλά εστιατόρια cafe - bar. Όσο για την παραλία είναι και οργανωμένη. Επίσης θα πρέπει' +
                            '                       να γνωρίζεται πως τα νερά είναι δροσερά και έχει βότσαλα.',
                        mikriAmmos: '<h5>Μικρή Άμμος</h5>Αμέσως μετά την Μέγα Άμμο είναι η Μικρή Αμμος στην οποία θα βρείτε και' +
                            '                       φαγητό και bar. Ειναι οργανωμένη.',
                        pisina: '<h5>Πισίνα</h5>Η ονομασία τα λέει όλα! Βρίσκεται στο νησί του Αγίου Νικολάου. Η πρόσβαση γίνεται' +
                            '                       μόνο με βάρκα. Η θάλασσα είναι αρκετά δροσερή αλλά αυτά τα νερά θα σας μείνουν αξέχαστα!',
                        karavostasi: '<h5>Καραβοστάσι</h5>Η παραλία Καραβοστάσι είναι μια ιδιαίτερα μεγάλη οργανωμένη παραλία με λευκή άμμο και' +
                            '                       καταγάλανα νερά. Έχει καταπληκτικό τοπίο όπου μπορείτε να χαλαρώσετε απολαμβάνοντας τον καφέ ή το' +
                            '                       φαγητό σας. Επίσης, μπορείτε να νοικιάσετε για τη διασκέδαση σας στο νερό κανό, ποδήλατα θαλάσσης κτλ.' +
                            '                       Τέλος, η πρόσβαση σας στην παραλία είναι εύκολη και αναμφισβήτητα έχει πολύ χώρο για να παρκάρετε.',
                        arrilas: '<h5>Αρρίλας</h5>Απάνεμη οργανωμένη παραλία με ψιλή άμμο και πεντακάθαρα νερά. Είναι ιδανική και' +
                            '                       προτιμητέα για οικογένειες με παιδιά εφόσον είναι ιδιαίτερα ρηχή. Σαφώς εύκολα κανείς φθάνει στην' +
                            '                       παραλία είναι πολύ προσιτή και έχει χώρο για πάρκινγκ. Τέλος δίνεται η δυνατότητα να ενοικιάσετε βάρκα' +
                            '                       για να επισκεφθείτε τις διπλανές παραλίες.',
                    },
                    footerMenu: 'Μενού',
                    footerAddress: 'Σύβοτα, Θεσπρωτία',
                    footerRegistryNo: 'KIMON Αριθμός ΓΕΜΗ 019630328004 | IRIDA Αριθμός ΓΕΜΗ 019630328000'
                },
                contact: {
                    navbar: App.navbar_lang.gr,
                    reservations: App.header_bottom_lang.gr.reservations,
                    findus: App.header_bottom_lang.gr.findus,
                    title: 'Φόρμα επικοινωνίας',
                    main: 'Έλεγχος διαθεσιμότητας. Θα επικοινωνήσουμε μαζί σας το συντομότερο.',
                    form: {
                        errorMessages: {
                            'required': 'Υποχρεωτικο πεδίο',
                            'validEmail': 'Παρακαλώ εισαγάγετε μια έγκυρη διεύθυνση ηλεκτρονικού ταχυδρομείου',
                            'minlength10': 'Παρακαλώ εισαγάγετε τουλάχιστον 10 χαρακτήρες',
                            'minlength5': 'Παρακαλώ εισαγάγετε τουλάχιστον 5 χαρακτήρες',
                            'minlength3': 'Παρακαλώ εισαγάγετε τουλάχιστον 3 χαρακτήρες',
                        },
                    },
                    contactErrorMessage: 'Αδυναμία αποστολής',
                    contactSuccessMessage: 'Ευχαριστούμε για την επικοινωνία',
                    captchaErrorMessage: 'Το πεδίο captcha είναι υποχρεωτικό',
                    submit: 'Αποστολή',
                    footerMenu: 'Μενού',
                    footerAddress: 'Σύβοτα, Θεσπρωτία',
                    footerRegistryNo: 'KIMON Αριθμός ΓΕΜΗ 019630328004 | IRIDA Αριθμός ΓΕΜΗ 019630328000'
                },
            }
        }
    }
};
