import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoleSelectScreen } from './src/screens/RoleSelectScreen';
import { AuthScreen } from './src/screens/AuthScreen';
import { ForgotPasswordScreen } from './src/screens/ForgotPasswordScreen';
import { ResetPasswordScreen } from './src/screens/ResetPasswordScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { ChangePasswordScreen } from './src/screens/ChangePasswordScreen';
import { MainScreen } from './src/screens/MainScreen';
import { ShopDetailScreen } from './src/screens/ShopDetailScreen';
import { SubmitMediaScreen } from './src/screens/SubmitMediaScreen';
import { AddEditVenueScreen } from './src/screens/AddEditVenueScreen';
import { OwnerVenueDetailScreen } from './src/screens/OwnerVenueDetailScreen';
import { OwnerOnboardingStep1Screen } from './src/screens/OwnerOnboardingStep1Screen';
import { OwnerOnboardingStep2Screen } from './src/screens/OwnerOnboardingStep2Screen';
import { PointsScreen } from './src/screens/PointsScreen';
import { RedemptionsScreen } from './src/screens/RedemptionsScreen';
import { MySubmissionsScreen } from './src/screens/MySubmissionsScreen';
import { MySubmissionsByVenueScreen } from './src/screens/MySubmissionsByVenueScreen';
import { SubmissionsReviewScreen } from './src/screens/SubmissionsReviewScreen';
import { VenueRedemptionsScreen } from './src/screens/VenueRedemptionsScreen';
import { VenuePerksScreen } from './src/screens/VenuePerksScreen';
import { AddEditPerkScreen } from './src/screens/AddEditPerkScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="RoleSelect"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' },
        }}
      >
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={({ route }) => ({
            title: route?.params?.role === 'owner' ? 'Owner' : 'User',
          })}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="ShopDetail" component={ShopDetailScreen} />
        <Stack.Screen name="SubmitMedia" component={SubmitMediaScreen} />
        <Stack.Screen name="AddVenue" component={AddEditVenueScreen} />
        <Stack.Screen name="OwnerVenueDetail" component={OwnerVenueDetailScreen} />
        <Stack.Screen name="OnboardingStep1" component={OwnerOnboardingStep1Screen} />
        <Stack.Screen name="OnboardingStep2" component={OwnerOnboardingStep2Screen} />
        <Stack.Screen name="Points" component={PointsScreen} />
        <Stack.Screen name="Redemptions" component={RedemptionsScreen} />
        <Stack.Screen name="MySubmissions" component={MySubmissionsScreen} />
        <Stack.Screen name="MySubmissionsByVenue" component={MySubmissionsByVenueScreen} />
        <Stack.Screen name="SubmissionsReview" component={SubmissionsReviewScreen} />
        <Stack.Screen name="VenueRedemptions" component={VenueRedemptionsScreen} />
        <Stack.Screen name="VenuePerks" component={VenuePerksScreen} />
        <Stack.Screen name="AddEditPerk" component={AddEditPerkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
