import NavigationBar from "../components/NavigationBar";
import { Grid } from "@mui/material";
import MatrixEx from "../components/MatrixEx";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Table } from "@mui/material";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { red } from "@mui/material/colors";

export default function Home() {
  const [matrix, setMatrix] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  function handleChange(value, index) {
    let newMatrix = [...matrix];
    newMatrix[index] = value;
    setMatrix(newMatrix);
  }

  function MatrixFill(index) {
    return (
      <TextField
        inputProps={{ style: { textAlign: "center" } }}
        hiddenLabel
        id="top-left1"
        onChange={(event) => handleChange(event.target.value, index)}
        type="number"
        variant="standard"
        sx={{
          width: 40,
        }}
      />
    );
  }

  const MatrixExToFill = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 500,
      }}
    >
      <TableContainer sx={{ border: 2, borderRadius: 1 }}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              border: 1,
            },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2} colSpan={2} />
              <TableCell
                colSpan={2}
                sx={{ textAlign: "center", borderLeft: 1, borderBottom: 1 }}
              >
                Joueur 2
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center", border: 1 }}>
                Gauche
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", borderRight: "none", border: 1 }}
              >
                Droite
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} sx={{ textAlign: "center" }}>
                Joueur 1
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>Haut</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {matrix[0]} , {matrix[1]}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {matrix[2]} , {matrix[3]}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Bas</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {matrix[4]} , {matrix[5]}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {matrix[6]} , {matrix[7]}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  return (
    <>
      <NavigationBar activePage="Home" />
      <article>
        <h1>John Nash</h1>
        <p>
          John Nash est né en 1928. Ses travaux sur la théorie des jeux lui ont
          valu le prix Nobel d’Économie en 1994. Il est l’auteur d’une série
          d’articles qui portent sur les équilibres non-coopératifs, plus tard
          rebaptisés « équilibres de Nash ».
        </p>

        <h1>La théorie des jeux</h1>
        <p>
          Issue des mathématiques dans les années 1920, la théorie des jeux
          permet de prévoir le comportement des agents économiques, en faisant
          l’hypothèse que tout agent effectue toujours un choix rationnel visant
          à maximiser ses gains et à minimiser ses pertes.
        </p>
        <p>
          Elle offre un cadre formel à des questions de stratégies dans des
          situations d’interactions entre plusieurs agents. Elle s’intéresse
          notamment aux situations dans lesquelles les décisions prises par un
          agent ont un impact sur la manière dont les autres agents agissent et
          réagissent. Par exemple, une entreprise a-t-elle intérêt à baisser le
          prix de vente de son produit pour augmenter ses ventes ? Pas
          forcément… L’entreprise doit, ainsi, anticiper la réaction de ses
          concurrents, qui pourraient suivre la même stratégie de réduction du
          prix de vente. Sans anticipation de la contre-offensive commerciale
          des autres entreprises opérant sur le marché, le consommateur sera le
          seul gagnant (il bénéficiera de la baisse des prix).
        </p>
        <p>
          Toute la question est de savoir s’il est possible de prévoir les
          stratégies des différents protagonistes.
        </p>

        <h1>L'équilibre de Nash</h1>
        <p>
          Nash soutient sa thèse sur les jeux non-coopératifs en 1950. Dans
          cette catégorie de jeux, les agents ont des buts opposés. Les jeux
          coopératifs, quant à eux, visent à trouver la meilleure solution en
          faisant coopérer plusieurs joueurs.
        </p>
        <p>
          Dans sa thèse, Nash présente une situation d’équilibre qui deviendra
          bientôt l’« équilibre de Nash ». Par équilibre, il entend une
          situation dans laquelle aucun des joueurs ne peut trouver de meilleure
          stratégie de jeu, compte tenu des stratégies choisies par les autres
          joueurs.
        </p>
        <p>
          Prenons l’exemple classique du dilemme du prisonnier. Deux prisonniers
          (A et B) ont commis un cambriolage. Ils sont interrogés dans des
          pièces différentes et ne peuvent donc pas tenir compte des réponses de
          l’autre. i l’un des prisonniers dénonce son complice, il est libre,
          mais son complice est condamné à perpétuité. Si les prisonniers se
          dénoncent mutuellement, chacun est condamné à dix ans de prison.
          Enfin, dernier cas, si aucun des deux ne dénonce l’autre, ils écopent
          tous les deux d’un an de prison.
        </p>

        <Grid container spacing={2} className="dilemme">
          <Grid item xs={12} lg={5}>
            <img
              src="https://www.iconomix.ch/fileadmin/_processed_/c/b/csm_a006_grafik_bonnie-clyde_fr_9ca80b3875.jpg"
              width={480}
              alt="Dilemme du prisonnier"
            />
          </Grid>

          <Grid item xs={12} lg={7}>
            <p>
              A l’équilibre, les prisonniers choisissent de se dénoncer
              mutuellement car ils n’ont pas la possibilité de coopérer pour
              obtenir la peine minimale (ils sont dans des cellules séparées).
              On peut noter que dans ce cas, l’équilibre de Nash n’est pas un
              optimum de Pareto puisque les deux joueurs pourraient augmenter
              leur bien-être en coopérant.
            </p>
            <p>
              L’équilibre de Nash a eu et continue d’avoir de nombreuses
              applications en économie : on peut citer, entre autres, l’analyse
              du comportement des firmes en situation de duopole ou l’étude des
              mécanismes d’enchères pour l’octroi d’un marché public. Ses
              applications s’étendent également à la géopolitique (un exemple
              célèbre est celui de la crise des missiles de Cuba, où l’équilibre
              de Nash est utilisé pour étudier la dissuasion nucléaire) et, plus
              généralement, à l’étude des choix stratégiques.
            </p>
          </Grid>
        </Grid>
        <p>
          Le Comité Nobel a salué à trois reprises (en 1994, 2005 et 2007) les
          travaux de théoriciens des jeux.
        </p>
        <p>
          Pour l’anecdote, la vie de Nash a fait l’objet d’un film Un homme
          d’exception (2001), récompensé par l’Oscar du meilleur film en 2002.
        </p>

        {/* Copie trang Exercices */}

        <Grid container spacing={2}>
          <Grid item xs={12} lg={7}>
            <h1>Stratégie dominante, stratégie dominée</h1>
            <p>
              Le dilemme du prisonnier, ou quand la théorie des jeux....est très
              simple
            </p>
            <p>
              Avouer est une stratégie dominante, quel que soit ce que fait
              l'autre prisonnier, le prisonnier i préfère strictement avouer
              plutôt que ne pas avouer....les deux joueurs avouent donc, on dit
              que l'équilibre est un équilibre en stratégies dominantes.
            </p>
            <p>
              En mots, quel que soit ce que fait Joueur 2, Joueur 1 préfère
              toujours (strictement ) jouer <strong>Avouer</strong> : le
              meilleur choix de Joueur 1 ne dépend pas du comportement de Joueur
              2
            </p>
          </Grid>
          <Grid item xs={12} lg={5}>
            <MatrixEx />
          </Grid>
        </Grid>
        <p>
          <b>Avouer</b> est une stratégie dominante de ce jeu. À l'inverse, la
          stratégie <b>Ne pas avouer</b> est dominée.
        </p>
        <p>
          <em>
            <strong>
              <span style={{ color: red[800] }}>
                {" "}
                Une défnition moins exigente :
              </span>
            </strong>
            <span style={{ color: red[800] }}>
              {" "}
              une stratégie dominante pour un joueur domine toutes les autres
              stratégies de ce joueur.
            </span>
          </em>
        </p>

        <h1>Matrice de gain</h1>
        <p>
          La matrice des gains, matrice de coût ou encore matrice des paiements
          (anglicismes issus de payoff matrix) est un moyen de représenter un
          jeu sous forme stratégique par un tableau indiquant les gains (ou
          paiements) associés à chaque action en fonction des actions de l'autre
          joueur.
        </p>
        <h4>
          Exemple d'application : À vous de contruire la matrice de gain !
        </h4>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={7}>
            <p>
              On considère le jeu suivant à deux joueurs. Joueur 1 dispose 2
              stratégies Haut et Bas. Joueur 2 dispose 2 stratégies Gauche et
              Droite.
            </p>
            <ul>
              <li>
                Si J1 joue Haut et J2 joue Gauche, les gains seront de{" "}
                {MatrixFill(0)} pour J1 et {MatrixFill(1)} pour J2
              </li>
              <li>
                Si J1 joue Haut et J2 joue Droite, les gains seront de{" "}
                {MatrixFill(2)} pour J1 et {MatrixFill(3)} pour J2
              </li>
              <li>
                Si J1 joue Bas et J2 joue Gauche, les gains seront de{" "}
                {MatrixFill(4)} pour J1 et {MatrixFill(5)} pour J2
              </li>
              <li>
                Si J1 joue Bas et J2 joue Droite, les gains seront de{" "}
                {MatrixFill(6)} pour J1 et {MatrixFill(7)} pour J2
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} lg={5}>
            {MatrixExToFill}
          </Grid>
        </Grid>
      </article>
    </>
  );
}
