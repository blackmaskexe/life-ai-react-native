import { useTheme } from "@/utils/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import HabitItemContextMenu from "./zeego/HabitItemContextMenu";
import OverviewHabitdropdownMenu from "./zeego/OverviewHabitDropdownMenu";

export default function AllHabitsOverview({
  allHabitsArray,
}: {
  allHabitsArray: any[];
}) {
  const theme = useTheme();
  const styles = createStyles(theme);
  console.log("Drop down yeah", theme.colors.altBackground);
  return (
    <View style={styles.allHabitsContainer}>
      {allHabitsArray.map((habitItem, index) => {
        console.log("SIYUHHHHHHH", habitItem);
        return (
          <View
            style={styles.habitCard}
            key={`habitcard-${habitItem.habitName}`}
          >
            <Ionicons name="today" style={styles.habitIcon} size={24} />
            <View style={styles.habitCardText}>
              <Text style={styles.habitName}>{habitItem.habitName}</Text>
              <Text style={styles.habitDetails}>
                Streak: 12 | 9 days until 21
              </Text>
            </View>
            <View style={styles.habitCompletionDotContainer}>
              {Array(7).map((value, index) => {
                return (
                  <View
                    key={`${habitItem.habitName}-dot-${index}`}
                    style={styles.weekdayDot}
                  ></View>
                );
              })}
            </View>
            <OverviewHabitdropdownMenu habitItem={habitItem} />
          </View>

          // <View style={styles.habitCard}>
          //   <Ionicons name="today" style={styles.habitIcon} size={24} />
          //   <View style={styles.habitCardText}>
          //     <Text style={styles.habitName}>{habitItem.habitName}</Text>
          //     <Text style={styles.habitDetails}>
          //       Streak: 12 | 9 days until 21
          //     </Text>
          //   </View>
          //   <View style={styles.habitCompletionDotContainer}>
          //     {Array(7).map((value, index) => {
          //       return (
          //         <View
          //           key={`${habitItem.habitName}-dot-${index}`}
          //           style={styles.weekdayDot}
          //         ></View>
          //       );
          //     })}
          //   </View>
          //   <TouchableOpacity
          //     style={styles.habitOptions}
          //     onPress={() => {
          //       console.log("things i should of said", habitItem);
          //       SheetManager.show("example-sheet", {
          //         payload: {
          //           sheetType: "habitItem",
          //           habitItem: {
          //             habit: habitItem,
          //             habitIndex: index,
          //           },
          //         },
          //       });
          //     }}
          //   >
          //     <Ionicons
          //       name="ellipsis-vertical-outline"
          //       size={20}
          //       color={theme.colors.textSecondary}
          //     />
          //   </TouchableOpacity>
          // </View>
        );
      })}
    </View>
  );
}

function createStyles(theme: any) {
  return StyleSheet.create({
    allHabitsContainer: {
      //   padding: theme.spacing.m,
    },
    habitCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.m,
      marginBottom: theme.spacing.s,
      borderRadius: theme.radius.m,
    },
    habitIcon: {
      marginRight: theme.spacing.m,
      color: theme.colors.primary,
    },
    habitCardText: {
      flex: 1, // Take up available space
    },
    habitName: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    habitDetails: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    habitCompletionDotContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    weekdayDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.primary,
      marginHorizontal: 2,
    },
    habitOptions: {
      alignSelf: "center",
    },
  });
}
