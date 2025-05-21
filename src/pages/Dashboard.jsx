import { Box } from "@mui/material";
import GreetingBanner from "../components/GreetingBanner";
import MiniKpiCards from "../components/MiniKpiCards";
import RecentOrdersTable from "../components/RecentOrdersTable";

const Dashboard = () => {
    return (
        <Box sx={{ px: { xs: 1, md: 4 }, py: 3, background: "#f7f9fb", minHeight: "100vh" }}>
            <Box sx={{ mb: 3 }}>
                <GreetingBanner name="Admin" />
            </Box>
            <Box sx={{ mb: 4 }}>
                <MiniKpiCards />
            </Box>
            <Box>
                <RecentOrdersTable />
            </Box>
        </Box>
    );
}

export default Dashboard;
